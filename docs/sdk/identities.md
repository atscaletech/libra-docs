---
title: Libra Javascript SDK
titleTemplate: Identities management
---

# Identities management
[On-chain identity](/overview/on-chain-identity) is important to reduce the risks of payments. 

## Create an on-chain identity
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

- **Example**
```js
...
const { hash, status } = await libra.identities.deleteIdentity(account);
...
```

## Request evaluator to review identity

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

- **Example**
```js
...
const { hash, status } = await libra.identities.verify({
  account: 'Requested account address',
  transcript: [[1, true], [2, false], [3, false]]
}, account);
...
```