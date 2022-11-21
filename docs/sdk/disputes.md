---
title: Libra Javascript SDK
titleTemplate: Disputes Handling
---

# Disputes Handling

## Create a dispute
- **Description:** If the conflict between payer and payee can not be solved by themselves, the payer can be open an on-chain dispute. The dispute fee is required to open dispute.
- **Example**
```js
...
const { hash, status, payload } = await libra.ddr.dispute('payment_hash', account);
...
```

## Fight a dispute
- **Description:** If a dispute is opened, the payee need to fight with it. If the payer does not fight the dispute in the limited time, the payment will be refunded to the payer.
- **Example**
```js
...
const { hash, status, payload } = await libra.ddr.dispute('payment_hash', account);
...
```

## Escalate a dispute
- **Description:** Payer or payee can open an escalated dispute if they disagree with the judgment of selected resolvers. The fee will increase after each escalated round.
- **Example**
```js
...
const { hash, status, payload } = await libra.ddr.escalate('payment_hash', account);
...
```
## Propose outcome for a dispute
- **Description:** The selected resolvers propose their judgment for the dispute. The final outcome will depend on majority selected resolver judgments.
- **Example**
```js
...
const { hash, status, payload } = await libra.ddr.propose('payment_hash', account);
...
```