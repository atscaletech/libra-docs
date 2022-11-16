---
title: Libra Javascript SDK
titleTemplate: Manage currencies
---

# Manage currencies

## Create your own currencies

- **Example**
```js
...
const { hash, status } = await libra.currencies.createCurrencies({
  name: 'My Token',
  symbol: 'TokenM',
  decimals: 10,
}, account);
...
```

## Accept a currency

- **Example**
```js
...
const { hash, status } = await libra.currencies.acceptCurrencies(hashOfCurrency, account);
...
```

## Get list accepted currencies of a merchant

- **Example**
```js
...
const currencies = await libra.currencies.acceptedCurrencies(merchant_address);
...
```