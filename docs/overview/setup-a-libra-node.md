---
title: Setup a Libra Node
---

# How to setup a Libra node

## Clone Github Repo

```
git clone --recursive git@github.com:atscaletech/libra.git
cd libra
```

## Setup environment

```bash
sudo apt update && sudo apt install -y git clang curl libssl-dev llvm libudev-dev
curl https://sh.rustup.rs -sSf | sh
source ~/.cargo/env
rustup default stable
rustup update
rustup update nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
```

## Build

```bash
cargo build --release
```

## Run dev chain
```
./target/release/libra --dev --tmp
```
