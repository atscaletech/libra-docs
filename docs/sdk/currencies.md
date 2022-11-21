---
title: Libra Javascript SDK
titleTemplate: Manage currencies
---
# Manage currencies
Libra SDK allows you to create your own currencies. The currencies except native currency needs to be accepted by the merchant before paying in the Libra payment protocols.

## Create your own currencies
- **Description:** Create a new currency
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
- **Description:** Merchant accept a currency that can be spend on their shop
- **Example**
```js
...
const { hash, status } = await libra.currencies.acceptCurrencies(hashOfCurrency, account);
...
```

## Get list accepted currencies of a merchant
- **Description:** Get list accepted currencies of a merchant
- **Example**
```js
...
const currencies = await libra.currencies.acceptedCurrencies(merchant_address);
...
```