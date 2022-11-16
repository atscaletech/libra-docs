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
  <script src="CND link" async></script>
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

## Usage

### Create Libra instance
```js
import { Libra } from 'libra-js';

const libra = new Libra({
  appName: 'Your app name',
  rpc: 'wss://rpc.libra.example.xyz',
});

```

### Modules
Please see the detail usage modules in the links below:
- [Wallet Connection](/sdk/connect-wallet)
- [Payments](/sdk/payments)
- [Currencies](/sdk/currencies)
- [Disputes](/sdk/disputes)
- [Resolvers Network](/sdk/identities)
- [Identities](/sdk/identities)
