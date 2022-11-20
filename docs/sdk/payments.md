---
title: Libra Javascript SDK
titleTemplate: Payments Handling
---

# Payments Handling
Libra offers direct transfer payments and lock-n-release payments. The guide bellow will show how to work with payments in LRP Protocol.
## Create a payment

- **Example**
```js
import Libra from 'libra-js';

...
const { hash, status } = await libra.lrp.createPayment({
  payee: 'payee_address',
  amount: 1000,
  currencyId: 'CurrencyId',
  description: 'payment description',
  receipt: 'payment receipt'
}, account);
...
```

## Get a payment


```js
...
const payment = await libra.lrp.getPayment('payment_hash');
...
```

## Get list payments of payer

```js
...
const payment = await libra.lrp.getPaymentsByPayer('payer_address');
...
```

## Get list payments of payee

```js
...
const payment = await libra.lrp.getPaymentsByPayee('payee_address');
...
```

## Accept a payment

```js
...
const payment = await libra.lrp.acceptPayment('payment_hash');
...
```

## Reject a payment

```js
...
const payment = await libra.lrp.rejectPayment('payee_address');
...
```

## Reject a payment

```js
...
const payment = await libra.lrp.rejectPayment('payee_address');
...
```