# Library-bank

A reusable Angular component library with Storybook examples and unit tests.

## Overview

This repository contains an Angular library package located under `library/projects/lib-bank` and Storybook stories for the library components.

## Getting started

The main package manifest is inside the `library/` folder, so run commands from that directory.

```bash
cd library
npm install
```

## Development

Start the Angular development server from the `library/` folder:

```bash
cd library
npm start
```

Then open `http://localhost:4200/` in your browser.

## Build

Build the Angular library package:

```bash
cd library
npm run build
```

## Tests

Run unit tests with Vitest using Angular CLI:

```bash
cd library
npm test
```

## Storybook

Launch Storybook locally:

```bash
cd library
npm run storybook
```

Build the Storybook production bundle:

```bash
cd library
npm run build-storybook
```

## Project structure

- `library/`: root of the Angular workspace and package config
- `library/projects/lib-bank/src`: library source files and components
- `library/projects/lib-bank/src/stories`: Storybook stories for the components
- `library/projects/lib-bank/src/lib`: reusable library components and services

## Additional resources

- Angular CLI: https://angular.dev/cli
- Storybook for Angular: https://storybook.js.org/docs/angular/get-started/introduction
