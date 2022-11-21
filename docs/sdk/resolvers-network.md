---
title: Libra Javascript SDK
titleTemplate: Resolvers Network
---

# Resolvers Network

## Get a resolver info
- **Description:** Get the information of a resolver by its account address
- **Example**
```js
...
const resolver = await libra.resolvers.getResolver(resolverAddress);
...
```

## Join network
- **Description:** Request to become a resolver. If the self stake match the requirements, the account will become the active resolver. Otherwise, the account will remain the candidacy until the received enough delegation.
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
- **Description:** Request to resign from resolver network
- **Example**
```js
...
const { hash, status } = await libra.resolvers.resign(account);
...
```

## Delegate
- **Description:** Delegate token to a resolver. Once the total stake of resolver match requirement, it will be active
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
- **Description:** Undelegate token from a resolver. Once the total stake not match the requirements, the resolver will be terminated.
- **Example**
```js
...
const { hash, status } = await libra.resolvers.undelegate({
  account: 'resolver_account_address',
  amount: 10000,
});
...
```