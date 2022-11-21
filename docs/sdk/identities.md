---
title: Libra Javascript SDK
titleTemplate: Identities management
---

# Identities management
[On-chain identity](/overview/on-chain-identity) is important to reduce the risks of payments. People can evaluate the credibility of an account before do any exchange with that account to avoid the risks of fraud or money laundering.

## Create an on-chain identity
- **Description:** Setup a new identity for the account
- **Example**
```js
...
const { hash, status } = await libra.identities.createIdentity({
  name: 'Organization X',
  type: 'Organization',
  data: [
    {
      name: 'domain',
      value: 'https://organization-x-domain.org'
    }
  ]
}, account);
...
```

## Update an on-chain identity
- **Description:** Update the on-chain identity of the account
- **Example**
```js
...
const { hash, status } = await libra.identities.createIdentity({
  name: 'Organization Z',
  data: [
    {
      name: 'domain',
      value: 'https://organization-z-domain.org'
    }
  ]
}, account);
...
```

## Delete on-chain identity
- **Description:** Remove the on-chain identity of the account
- **Example**
```js
...
const { hash, status } = await libra.identities.deleteIdentity(account);
...
```

## Request evaluator to review identity
- **Description:** Request an evaluator to review on-chain data fields at provided positions
- **Example**
```js
...
const { hash, status } = await libra.identities.requestToVerify({
  account: 'Evaluator Address',
  positions: [1,2,3], // Positions of identity data field
}, account);
...
```

## Submit the evaluated result of an account
- **Description:** Submit transcript of evaluation based on review requests. The evaluator only can submit evaluation about requested account.
- **Example**
```js
...
const { hash, status } = await libra.identities.verify({
  account: 'Requested account address',
  transcript: [[1, true], [2, false], [3, false]]
}, account);
...
```