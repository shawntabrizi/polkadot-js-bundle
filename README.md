# polkadot-js-bundle

This project was used to create JS bundles for the [Polkadot JS APIs](https://github.com/polkadot-js/).

Polkadot{JS} [now supports official JS bundles](https://polkadot.js.org/docs/usage/FAQ/#i-would-like-to-use-browser-bundles-bypassing-the-compile-step), so this project is mostly deprecated.

This page just serves to show how you can use them.

Include the official Polkadot JS Bundles like so:

```js
<script src="//unpkg.com/@polkadot/util/bundle-polkadot-util.js"></script>
<script src="//unpkg.com/@polkadot/util-crypto/bundle-polkadot-util-crypto.js"></script>
<script src="//unpkg.com/@polkadot/types/bundle-polkadot-types.js"></script>
<script src="//unpkg.com/@polkadot/api/bundle-polkadot-api.js"></script>
<script src="//unpkg.com/@polkadot/keyring/bundle-polkadot-keyring.js"></script>
```

Note that some bundles may require you to include other bundles. For example, to use `bundle-polkadot-api.js` you must include the other 3 bundles as well.

To access to the bundle within a JavaScript file, just do the following:

```js
// Just some random examples...
const { stringToHex, hexToString } = polkadotUtil;
const { blake2AsHex, xxhashAsHex } = polkadotUtilCrypto;
const { TypeRegistry, createType } = polkadotTypes;
const { WsProvider, ApiPromise } = polkadotApi;
const { Keyring } = polkadotKeyring;
```

See the [test page](https://shawntabrizi.github.io/polkadot-js-bundle) as a sanity check that things are working.
