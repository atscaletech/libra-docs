---
title: Libra
titleTemplate: Decentralized Dispute Resolution(DDR)
---

# Decentralized Dispute Resolution (DDR)

## What is DDR?

Decentralized Dispute Resolution is an on-chain dispute resolution that helps
resolve conflicts between payer and payee in the most equitable way possible.

## Why DDR?
Although most payments can be processed on the lock and release protocol, disputes are inevitable and they need to be resolved by a specified process. The expected dispute rate of the network is about 2% and reduces over time depending on the maturity of identifier and risk evaluation services. A dispute occurs when the participants cannot decide the outcome of payment by themselves and the fund remains deadlocked in the smart contract. In the cases, an on-chain dispute resolution method is necessary to resolve the conflicts.

## How DDR works?

Libra's decentralized dispute resolution system is powered by the resolvers network, which allows individuals to stake their assets to become conflict resolvers. Resolvers in the network are rewarded with dispute fees and penalized for making incorrect decisions.

When a payee decides to fight a dispute, a resolver is assigned at random to the case using a verifiable random function (VRF). The resolver must assess the evidence presented by the payer and payee and render a decision. If the payer or payee disagrees with the decision, they can escalate it, and more resolvers will be assigned via VRF to re-evaluate the situation. When the dispute is resolved, the correct resolvers will be rewarded. The wrong resolvers will be slashed.

![Resolvers Network](/assets/resolvers.drawio.svg)