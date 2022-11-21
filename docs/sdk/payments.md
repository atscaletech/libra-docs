---
title: Libra Javascript SDK
titleTemplate: Payments Handling
---

# Payments Handling

## Using LRP Protocol
### Create a payment
- **Description:** Create a payment in LRP Protocol
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

### Get a payment
- **Description:** Get a payment from LRP Protocol by payment hash
- **Example**
```js
...
const payment = await libra.lrp.getPayment('payment_hash');
...
```

### Get list payments of payer
- **Description:** Get all payments of a payer by its address
- **Example**
```js
...
const payment = await libra.lrp.getPaymentsByPayer('payer_address');
...
```

### Get list payments of payee
- **Description:** Get all payments of a payee by its address
- **Example**
```js
...
const payment = await libra.lrp.getPaymentsByPayee('payee_address');
...
```

### Accept a payment
- **Description:** Accept a payment from payee(merchant) account
- **Example**
```js
...
const payment = await libra.lrp.acceptPayment('payment_hash', account);
...
```

### Reject a payment
- **Description:** Reject a payment from payee(merchant) account
- **Example**
```js
...
const payment = await libra.lrp.rejectPayment('payment_hash', account);
...
```

### Fulfill a payment
- **Description:** Fulfill a payment when the merchant fulfill the order. Only payee account is accepted.
- **Example**
```js
...
const payment = await libra.lrp.fulfillPayment('payment_hash', account);
...
```

### Cancel a payment
- **Description:** Cancel a processing payment. While `Pending | Accepted` payment can be cancelled by both payer and payee, the `Fulfilled` payment need to be cancelled by the payee.
- **Example**
```js
...
const payment = await libra.lrp.cancelPayment('payment_hash', account);
...
```

### Complete a payment
- **Description:** A payer marks payment as completed. Once its done, the payment will be irreversible.
- **Example**
```js
...
const payment = await libra.lrp.completePayment('payment_hash', account);
...
```
