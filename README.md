# Weather App Documentation

## Overview

This project is a weather application built using React and TypeScript. It fetches weather data from an API and displays
it to the user. The application provides information about temperature, wind speed, weather type, humidity, pressure,
cloud coverage, and astronomical data like sunrise, sunset, moon phase, and moon illumination.

## Key Files

### `src/Modules/TimeFetcher.tsx`

This module fetches and handles time-related data such as sunrise, sunset, moon phase, and moon illumination. It uses
the `axios` library to make a GET request to the weather API, it should also use its own class in the future for better
separation of concerns. The fetched data is then set to the state and used to
render the `DayNightCycle` component.

### `src/Modules/WeatherFetcher.tsx`

This module fetches and handles weather data such as temperature, wind speed, weather type, humidity, pressure, and cloud coverage. It uses the `WeatherAPI` class from `src/Services/WeatherAPI.ts` to fetch the weather data. The fetched data is set to the state and used to render the `WeatherDetails` component. It also handles error messages by displaying a modal if there's an issue fetching the data. The component uses `useEffect` hooks to fetch data whenever the coordinates change and to scroll the weather details into view when new data is loaded. The component is memoized to prevent unnecessary re-renders.

### `src/Modules/WeatherData/WeatherDetails.tsx`

This module receives weather, location, and coordinate data as props and renders detailed weather information. It includes multiple components:

- `Temperature`: Displays the current temperature and how it feels.
- `Wind`: Displays wind speed, direction, and gust information.
- `Type`: Displays the current weather type.
- `Details`: Displays additional weather details such as humidity, pressure, and cloud coverage.
- `TimeFetcher`: Fetches and displays astronomical data like sunrise, sunset, moon phase, and moon illumination.

The `WeatherDetails` component structures these elements into a cohesive display for the user.


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