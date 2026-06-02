# LibBank

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the library, run:

```bash
ng build lib-bank
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library to GitHub Packages. The package is scoped to your GitHub owner and the workspace package metadata has been updated accordingly.

1. Ensure the package is scoped (example): `@MarianaSarri/lib-bank` and `publishConfig.registry` points to the GitHub Packages registry.

2. Authenticate with GitHub Packages. Do not commit tokens to source control. Use one of these approaches:

- Create a local (untracked) `.npmrc` in your user or project directory with this content (recommended for one-off publishes):

```ini
@MarianaSarri:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Set the `GITHUB_TOKEN` environment variable in your shell before publishing:

```bash
export GITHUB_TOKEN=ghp_...
```

Or use GitHub Actions to publish from CI and set the token as a secret.

3. Build and publish (from the workspace root):

```bash
cd library
npm run publish:github
```

This runs `ng build lib-bank` and then publishes the contents of `dist/lib-bank` to the configured registry.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
