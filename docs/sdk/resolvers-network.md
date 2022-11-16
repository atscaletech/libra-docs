---
title: Libra Javascript SDK
titleTemplate: Resolvers Network
---

# Resolvers Network

## Get a resolver info

- **Example**
```js
...
const { hash, status } = await libra.resolvers.getResolver(resolverAddress);
...
```

## Join network

- **Example**
```js
...
const { hash, status } = await libra.resolvers.joinResolverNetwork({
  application: 'Your application',
  selfStake: 1000000,
});
...
```

## Resign

```js
...
const { hash, status } = await libra.resolvers.resign(account);
...
```

## Delegate

- **Example**
```js
...
const { hash, status } = await libra.resolvers.delegate({
  account: 'resolver_account_address',
  amount: 10000,
});
...
```

## Undelegate

- **Example**
```js
...
const { hash, status } = await libra.resolvers.undelegate({
  account: 'resolver_account_address',
  amount: 10000,
});
...
```