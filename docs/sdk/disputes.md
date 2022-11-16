---
title: Libra Javascript SDK
titleTemplate: Disputes Handling
---

# Disputes Handling


## Create a dispute

```js
...
const extensions = await libra.ddr.dispute();

console.log(extensions);
...
```

## Fight a dispute

- **Example**
```js
...
const accounts = await libra.ddr.fight();

console.log(extensions);
...
```

## Escalate a dispute

```js
...
const accounts = await libra.ddr.escalate();

console.log(extensions);
...
```

## Propose outcome for a dispute

```js
...
const accounts = await libra.ddr.proposeOutcome();

console.log(extensions);
...
```