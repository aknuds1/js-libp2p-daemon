<a name="0.2.2"></a>
## [0.2.2](https://github.com/libp2p/js-libp2p-daemon/compare/v0.2.1...v0.2.2) (2019-07-10)


### Bug Fixes

* **bin:** exit with status 1 on unhandled rejection ([#23](https://github.com/libp2p/js-libp2p-daemon/issues/23)) ([596005d](https://github.com/libp2p/js-libp2p-daemon/commit/596005d))
* **main:** deal with unhandled rejections ([#20](https://github.com/libp2p/js-libp2p-daemon/issues/20)) ([49e685a](https://github.com/libp2p/js-libp2p-daemon/commit/49e685a))
* **package.json:** fix main property ([#22](https://github.com/libp2p/js-libp2p-daemon/issues/22)) ([1d505b8](https://github.com/libp2p/js-libp2p-daemon/commit/1d505b8))
* resolve loading of private key from file ([#21](https://github.com/libp2p/js-libp2p-daemon/issues/21)) ([3e70ace](https://github.com/libp2p/js-libp2p-daemon/commit/3e70ace))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/libp2p/js-libp2p-daemon/compare/v0.2.0...v0.2.1) (2019-04-29)


### Bug Fixes

* peer info ([#17](https://github.com/libp2p/js-libp2p-daemon/issues/17)) ([69cf26b](https://github.com/libp2p/js-libp2p-daemon/commit/69cf26b))


### Features

* add support initial peerstore support ([#14](https://github.com/libp2p/js-libp2p-daemon/issues/14)) ([36a520c](https://github.com/libp2p/js-libp2p-daemon/commit/36a520c))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/libp2p/js-libp2p-daemon/compare/v0.1.2...v0.2.0) (2019-03-20)


### Bug Fixes

* decapsulate ipfs protocol on daemon startup ([#11](https://github.com/libp2p/js-libp2p-daemon/issues/11)) ([190df09](https://github.com/libp2p/js-libp2p-daemon/commit/190df09))


### Features

* add pubsub support ([#12](https://github.com/libp2p/js-libp2p-daemon/issues/12)) ([5d27b90](https://github.com/libp2p/js-libp2p-daemon/commit/5d27b90))
* add support for unix multiaddr listen ([#10](https://github.com/libp2p/js-libp2p-daemon/issues/10)) ([9106d68](https://github.com/libp2p/js-libp2p-daemon/commit/9106d68))


### BREAKING CHANGES

* The --sock param/flag has been replaced by --listen, which now expects a multiaddr string.

Example: `jsp2pd --sock=/tmp/p2p.sock` would now be `jsp2pd --listen=/unix/tmp/p2p.sock`

* feat: add support for unix multiaddr listen
* feat: add support for hostAddrs flag
* feat: add support for websockets
* feat: add announceAddrs support
* test: split up tests into files
* feat: use multiaddr instead of path for everything
* feat: update stream handler to use multiaddr bytes
* chore: fix lint
* chore: update multiaddr dep
* test: fix test runners
* fix: add a default host address
* fix: catch decapsulate errors when no ipfs present
* chore: fix feedback



<a name="0.1.2"></a>
## [0.1.2](https://github.com/libp2p/js-libp2p-daemon/compare/v0.1.1...v0.1.2) (2019-02-14)


### Bug Fixes

* remove ipfs from identify multiaddrs ([7cee6ea](https://github.com/libp2p/js-libp2p-daemon/commit/7cee6ea))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/libp2p/js-libp2p-daemon/compare/v0.1.0...v0.1.1) (2019-02-13)


### Bug Fixes

* connect should use peer id in bytes ([021b006](https://github.com/libp2p/js-libp2p-daemon/commit/021b006))



<a name="0.1.0"></a>
# 0.1.0 (2019-01-31)


### Features

* initial implementation of the libp2p daemon spec ([#1](https://github.com/libp2p/js-libp2p-daemon/issues/1)) ([383a6bd](https://github.com/libp2p/js-libp2p-daemon/commit/383a6bd))



