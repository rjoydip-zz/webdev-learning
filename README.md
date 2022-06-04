# webdev-learning

[![Deploy to GitHub Pages](https://github.com/rjoydip/webdev-learning/actions/workflows/deploy.yml/badge.svg)](https://github.com/rjoydip/webdev-learning/actions/workflows/deploy.yml)

Webdev Learning resources repository

## Installation

```sh
yarn
```

## Local Development

```sh
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Write header ID in .mdx

```sh
yarn write-heading-ids --overwrite docs/**/* *.mdx
```

## Deployment

Using SSH:

```sh
USE_SSH=true yarn deploy
```

Not using SSH:

```sh
GIT_USER=<Your GitHub username> yarn deploy
```

```powershell
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
