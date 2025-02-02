'use strict'

const net = require('net')
const Socket = net.Socket
const { encode, decode } = require('length-prefixed-stream')
const { Request } = require('./protocol')
const LIMIT = 1 << 22 // 4MB

const { ends, multiaddrToNetConfig } = require('./util')

class Client {
  constructor (addr) {
    this.multiaddr = addr
    this.server = null
    this.socket = new Socket({
      readable: true,
      writable: true,
      allowHalfOpen: true
    })
  }

  /**
   * Connects to a daemon at the unix socket path the client
   * was created with
   * @returns {Promise}
   */
  attach () {
    return new Promise((resolve, reject) => {
      const options = multiaddrToNetConfig(this.multiaddr)
      this.socket.connect(options, (err) => {
        if (err) return reject(err)
        resolve()
      })
    })
  }

  /**
   * Starts a server listening at `socketPath`. New connections
   * will be sent to the `connectionHandler`.
   * @param {Multiaddr} addr
   * @param {function(Stream)} connectionHandler
   * @returns {Promise}
   */
  async startServer (addr, connectionHandler) {
    if (this.server) {
      await this.stopServer()
    }
    return new Promise((resolve, reject) => {
      this.server = net.createServer({
        allowHalfOpen: true
      }, connectionHandler)

      const options = multiaddrToNetConfig(addr)
      this.server.listen(options, (err) => {
        if (err) return reject(err)
        resolve()
      })
    })
  }

  /**
   * Closes the net Server if it's running
   * @returns {Promise}
   */
  stopServer () {
    return new Promise((resolve) => {
      if (!this.server) return resolve()
      this.server.close(() => {
        this.server = null
        resolve()
      })
    })
  }

  /**
   * Closes the socket
   * @returns {Promise}
   */
  async close () {
    await this.stopServer()
    return new Promise((resolve) => {
      this.socket.end(resolve)
    })
  }

  /**
   * Sends the request to the daemon and returns a stream. This
   * should only be used when sending daemon requests.
   * @param {Request} request A plain request object that will be protobuf encoded
   * @returns {Stream}
   */
  send (request) {
    // Decode and pipe the response
    const dec = decode({ limit: LIMIT, allowEmpty: true })
    this.socket.pipe(dec)

    // Encode and pipe the request
    const enc = encode()
    enc.write(Request.encode(request))
    enc.pipe(this.socket)

    return ends(dec)
  }

  /**
   * A convenience method for writing data to the socket. This
   * also returns the socket. This should be used when opening
   * a stream, in order to read data from the peer libp2p node.
   * @param {Buffer} data
   * @returns {Socket}
   */
  write (data) {
    this.socket.write(data)
    return this.socket
  }
}

module.exports = Client
