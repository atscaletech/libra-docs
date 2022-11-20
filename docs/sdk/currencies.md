---
title: Libra Javascript SDK
titleTemplate: Manage currencies
---
# Manage currencies
Libra SDK allows you to create your own currencies. The currencies except native currency needs to be accepted before paid through [LRP Protocol](/overview/lock-and-release-protocol).

## Create your own currencies
- **Interface** 

```js 
interface CurrencyInput {
  name: string;
  symbol: string;
  decimal: integer;
}


```

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