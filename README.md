# Storybook code coverage example

Forked from this blog post [Combining Storybook, Cypress and Jest Code Coverage](https://dev.to/penx/combining-storybook-cypress-and-jest-code-coverage-4pa5), updated to use [cypress-react-unit-test v2](https://github.com/bahmutov/cypress-react-unit-test/tree/feature/cypress-mount-mode)

See Cypress integration spec [cypress/integration/spec.js](cypress/integration/spec.js) and Cypress component tests [utilities/useToggle.spec.js](utilities/useToggle.spec.js), [src/design-system/GlobalStyles/global-styles-spec.js](src/design-system/GlobalStyles/global-styles-spec.js) and [src/application/App-spec.js](src/application/App-spec.js). When running together they get 100% code coverage

![Coverage](images/coverage.png)
