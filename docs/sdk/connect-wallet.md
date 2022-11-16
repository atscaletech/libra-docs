---
title: Libra Javascript SDK
titleTemplate: Connect the wallets
---

# Connect the wallets

Libra SDK provides the wallet connection utils to connect with Web3 wallets easier.

## Connect

```js
...
await libra.walletConnection.connect();
...
```

## Get extensions

```js
...
const extensions = await libra.walletConnection.getExtensions();

console.log(extensions);
...
```

## Get accounts

- **Example**
```js
...
const accounts = await libra.walletConnection.getAccounts();

console.log(extensions);
...
```