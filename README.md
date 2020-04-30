# berlin-sidewalk-widths

> Interactive map of Berlin sidewalk widths: https://gehwege.citylab-berlin.org/info

## Data sets and calculation of widths

The Open Data of sidewalk positions comes from FIS-Broker, the Geodata portal of Berlin:
https://fbinter.stadt-berlin.de/fb/index.jsp?loginkey=zoomStart&mapId=k_StraDa@senstadt&bbox=385419,5816845,385649,5816975. This is a data set of sidewalk polygons, collected by the Senatsverwaltung für Umwelt, Verkehr und Klimaschutz. 

The calculation of widths from this polygons is based on the method of https://github.com/meliharvey/sidewalkwidths-nyc which was used for a visualization of sidewalk widths in New Yorck City: https://www.sidewalkwidths.nyc/#13/40.69449/-74.00275. Please visit their repository to learn more about the calculation.

This visualization is based on the boilerplate template of Technologiestiftung Berlin. This repo only contains a test data set. The data set of sidewalk widths is loaded from Mapbox Vector tiles. 

## Usage of the map

Add a ```.env``` file with your mapbox token and style credentials in the root directory. Register at mapbox to get an access token.

```
REACT_APP_MAP_TOKEN={{MAPBOX_TOKEN}}
REACT_APP_MAP_STYLE={{MAPBOX_STYLE_URL}}
```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



