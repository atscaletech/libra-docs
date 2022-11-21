---
title: Libra Javascript SDK
titleTemplate: Connect the wallets
---

# Connect the wallets
Libra SDK provides the wallet connection to connect with Web3 wallets easier.

## Connect
- **Description:** Connect to web3 wallets
- **Example**
```js
...
await libra.walletConnection.connect();
...
```

## Get extensions
- **Description:** Get all the available web3 wallet extensions on the browsers
- **Example**
```js
...
const extensions = await libra.walletConnection.getExtensions();

console.log(extensions);
...
```

## Get accounts
- **Description:** Get all accounts of a web3 extension by its name
- **Example**
```js
...
const extensionName = 'polkadot-js';
const accounts = await libra.walletConnection.getAccounts(extensionName);

console.log(accounts);
...
```

## Get signer
- **Description:** Get the signer of a web3 extension by its name
- **Example**
```js
...

const extensionName = 'polkadot-js';
const signer = await libra.walletConnection.getSigner(extensionName);

console.log(signer);
...