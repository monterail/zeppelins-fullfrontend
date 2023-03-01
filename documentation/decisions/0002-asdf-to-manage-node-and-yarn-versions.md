# 2. ASDF to manage Node and Yarn versions

Date: 2023-02-23

## Status

Accepted

## Context

We use specific version of NodeJS (18.14.0) and Yarn (3.4.1) in the project. We needed to chose tool to smoothly manage them on local machines. It's useful because we may run many different projects with different versions of tools.

## Decision

As it's preferred tool in our company we decided to use [ASDF](https://asdf-vm.com/).

## Consequences

The biggest advantage over the most popular tool (`nvm`) in our case is that `ASDF` automatically changes node version for the session if it meets `.tool-version` file in the directory. Another basic advantage is that it can manage versions of many different technologies, like `ruby` or `python`.

[Installation process](https://asdf-vm.com/guide/getting-started.html)

Our `.tool-versions` file looks like this:

```bash
nodejs 18.14.0
```

Starting from `Node 16.10` `Yarn` is shipped together with `Node`. You don't need to install it separately. If you have another version of `Yarn` installed and after installing Node 18.14.0 through `ASDF` `Yarn` doesn't switch automatically you need to type this in the terminal:

```bash
corepack enable
```

More details about it [here](https://yarnpkg.com/getting-started/install).
