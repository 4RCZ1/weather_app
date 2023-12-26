# Weather App Documentation

## Overview

This project is a weather application built using React and TypeScript. It fetches weather data from an API and displays
it to the user. The application provides information about temperature, wind speed, weather type, humidity, pressure,
cloud coverage, and astronomical data like sunrise, sunset, moon phase, and moon illumination.

## Key Files

### `src/Modules/TimeFetcher.tsx`

This module fetches and handles time-related data such as sunrise, sunset, moon phase, and moon illumination. It uses
the `axios` library to make a GET request to the weather API. The fetched data is then set to the state and used to
render the `DayNightCycle` component.

### `src/Modules/WeatherDetails.tsx`

This module fetches and handles weather data such as temperature, wind speed, weather type, humidity, pressure, and
cloud coverage. It uses the `axios` library to make a GET request to the weather API. The fetched data is then set to
the state and used to render various components like `Temperature`, `Wind`, `Type`, `Details`, and `TimeFetcher`.

### `src/index.tsx`

This is the entry point of the application. It renders the `App` component into the root element of the page. It also
registers a service worker for offline capabilities and reports web vitals for performance analysis.

## Dependencies

The project uses several dependencies for various functionalities:

- `react` and `react-dom` for building the user interface.
- `axios` for making HTTP requests.
- `@emotion/react` and `@emotion/styled` for styling components.
- `@mui/core` and `@mui/material` for Material-UI components.
- `@terrestris/react-geo` for geospatial functionalities.
- `framer-motion` for animations.
- `ol` for OpenLayers mapping library.
- `react-intersection-observer` for handling intersection observer API.
- `sass` for using SCSS styles.
- `typescript` for static types.
- `workbox-cli` for generating a service worker.
- `gh-pages` for deploying the application to GitHub Pages.

## Scripts

The project includes several scripts for development, testing, and deployment:

- `start`: Starts the development server.
- `build`: Builds the application for production.
- `test`: Runs the test suite.
- `eject`: Ejects the application from create-react-app.
- `predeploy`: Runs the build script before deployment.
- `deploy`: Deploys the application to GitHub Pages.

## Running the Project

To run the project, use the `yarn start` or `npm start` command. This will start the development server. To build the
project for production, use the `yarn build` or `npm run build` command. To deploy the application to GitHub Pages, use
the `yarn deploy` or `npm run deploy` command.