---
title: Libra Javascript SDK
titleTemplate: Getting started
---

# Libra Javascript SDK
Libra Javascript SDK is a toolbox to help developers easily integrate with the Libra system with their application. The SDK provides friendly interface and utils to handle on-chain connection within a few lines of code.

## Installation

### Loading Libra.js from CDN
The easiest way to use Libra SDK on the browser is add the script bellow to your HTML pages

```js
<head>
  ...
  <script src="https://cdn.jsdelivr.net/npm/@atscaletech/libra-sdk@1.0.0/dist/libra-sdk.cjs.production.min.js"></script>
  ...
</head>
```

### Install Libra.js as an ES module
We also publish the ES module on the NPM. So you can use NPM or Yarn to install the package.

```bash
npm install libra-js
```

or

```bash
yarn add libra-js
```

## Quick start

```js
import { Libra } from 'libra-js';

const libra = new Libra({
  appName: 'Libra Example',
  rpc: 'wss://rpc.libra.atscale.xyz',
});

async function main() {
  const ALICE_ADDRESS = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
  const BOB_ADDRESS = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';

  const account = await libra.walletConnection.getAccount(ALICE_ADDRESS);

  const { hash, status } = await libra.lrp.createPayment({
    payee: BOB_ADDRESS,
    amount: 1000,
    currencyId: 'Native',
    description: 'payment description',
    receipt: 'payment receipt'
  }, account);
}

```
## Next steps

Libra SDK provides different modules for purposes. Please see the details bellow:

- [Wallet Connection](/sdk/connect-wallet)
- [Payments](/sdk/payments)
- [Currencies](/sdk/currencies)
- [Disputes](/sdk/disputes)
- [Resolvers Network](/sdk/identities)
- [Identities](/sdk/identities)
