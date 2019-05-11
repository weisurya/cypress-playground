# Cypress Playground

## Tutorial Resources:
- https://docs.cypress.io/guides/getting-started/writing-your-first-test.html
- https://docs.cypress.io/api/api/table-of-contents.html

___
## Cypress Setup 101
- npm install cypress --save-dev
- npm install eslint-plugin-cypress eslint-plugin-chai-friendly --save-dev
- add new scripts on *package.json*
```json
"cypress:open": "./node_modules/.bin/cypress open",
"cypress:run": "./node_modules/.bin/cypress run"
```