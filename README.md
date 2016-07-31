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

**Actions:**
- What it is: Simple object that is a description of an event
- What it does: Trigger changes to Store via Reducers
- How it does it: Sent (Emitted) by components
- Accepts type (required) and data

**Store:**
- What it is: Single data tree of application state
- What it does: Updates relevant components when state changes
- How it does it: Listens for actions from Reducers
- Accepts main Reducer

**Reducers:**
- What it is: Pure functions
- What it does: Changes state
- How it does it: Handles Actions emitted by components and updates Store
- Accepts current state
- Returns new state or current state if no action match

### Immutable JS - https://facebook.github.io/immutable-js/
Enforce state immutability within the app.
To update state, return new object.

### Webpack - https://webpack.github.io/
Webpack is used as an efficient and easy to manage asset bundler for javascript, fonts and styles.

### Testing

**Mocha**

**Chai**

## Styles
This project uses [Twitter Bootstrap](http://getbootstrap.com) with some custom styles that can be found in `src/styles/styles.css`.


## Scripts
All automated build scripts are defined in the `package.json` file.

`Start`:
`Test`:
