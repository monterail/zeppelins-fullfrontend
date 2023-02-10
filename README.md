# Zeppelins FullFront

Monterail internal project. We test backendless approach to build fully functional app without BE team.
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

We use [asdf](https://asdf-vm.com/) to set up the local machine faster, and install dependencies like node.
example of asdf setup:

```bash
brew install asdf
asdf plugin-add nodejs
asdf install
```

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
