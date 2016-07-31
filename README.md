# Pluralsite Admin App

This is the codebase for Plural site's [Building Applications with React and Redux in ES6 course by Cory House](https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents)


## Architecture

### React - https://facebook.github.io/react/

Container (smart) components:
- Top level components
- Mutate state
- Use refs
- Pass data (props) & actions down to child components
- Interact with Redux Store
- Uses React's Lifecycle methods
- Little/No markup

Presentational (Dumb) components:
- Child components
- No logic
- Receives data (props) & actions from parent component
- Unaware of Redux Store
- Mostly markup

### Redux - http://redux.js.org/

Actions:
- Trigger changes to Store via Reducers
- Description of an event
- Sent (Emitted) by components
- Accepts type (required) and data

Store:
- Listens for actions from Reducers
- Updates component when Store changes
- Single data tree of application state
- Accepts main Reducer

Reducers:
- Pure functions that change state
- Handles Actions
- Accepts current state
- Returns new state
- Updates store


### Immutable JS - https://facebook.github.io/immutable-js/

### Webpack - https://webpack.github.io/
Webpack is used as an efficient and easy to manage asset bundler for javascript, fonts and styles.

### Testing


## Styles
This project uses [Twitter Bootstrap](http://getbootstrap.com) with some custom styles that can be found in `src/styles/styles.css`.


## Scripts
All automated build scripts are defined in the `package.json` file.

`Start`:
`Test`:
