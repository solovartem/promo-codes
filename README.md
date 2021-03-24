# Features

- Project is built using CRA, Typescript and ESLint and Prettier for clean code considerations.
- Airbnb ESLint config is used for linting rules.
- Several components are built considering reusability and seperation of concerns. Components are located in `/components` folder.
- A Mock API and a service layer to access to the API is implemented. API service is located in `/services/api.ts`
- React Router is installed, configured and ready to be used.
- Using Typescript, Unit Components and consistent naming conventions; code is structured as self-documenting.
- Types for the data coming from Mock API are documented in `/types/types.ts` file.

# Steps To Run Locally

1. Run `yarn` to install packages
2. Run web app using `yarn start`
3. On default, Web app runs on PORT 3000. To see the web app, you can visit http://localhost:3000. You can change PORT number from `.env` file.

# To Change the Data on Mock API

1. Change `./db.json` file manually
2. On default, Mock server runs on PORT 3003.
3. You can see the available data on the browser, by simply visiting:
   1. http://localhost:3003/services for `services` data (used in cards)
   2. http://localhost:3003/financials for `financials` data (used on Topbar)

### Task List

- [ x ] Develop a React App Using This Design: [here](https://www.figma.com/file/6J7oriX3K4zPLF2lrhfIvJ/front-end-test-prototype)
- [ x ] Ability to filter services by name.
- [ x ] Ability to reset filters.
- [ x ] Ability to copy promo code to the clipboard.
- [ x ] Ability to change service status to “Activated” by clicking on the “Activate bonus” button.
- [ x ] Mock API.
- [ x ] Should be built with webpack and
- [ x ] Should include a README.md with instructions on how to run it locally.
