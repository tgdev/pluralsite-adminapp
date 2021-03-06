# Architecture

## React - https://facebook.github.io/react/

**Container (smart) components:**
- Top level components
- Mutate state
- Use refs
- Pass data (props) & actions down to child components
- Interact with Redux Store
- Uses React's Lifecycle methods
- Little/No markup

**Presentational (Dumb) components:**
- Child components
- No logic
- Receives data (props) & actions from parent component
- Unaware of Redux Store
- Mostly markup

## Redux - http://redux.js.org/

**Actions:**
- What it is: Simple object that is a description of an event
- What it does: Receives behaviour from components and triggers changes to Store via Reducers
- How it does it: Sends (Dispatches) current state and actionType to Reducers
- Accepts type (required) and data

**Reducers:**
- What it is: Pure functions
- What it does: Changes state
- How it does it: Handles Actions emitted by Components and updates Store
- Accepts current state and actionType
- Returns new state or current state if no action match

**Store:**
- What it is: Single data tree of application state
- What it does: Updates relevant components when state changes
- How it does it: Listens for state changes from Reducers
- Accepts main Reducer

## React Redux - http://redux.js.org/docs/basics/UsageWithReact.html

**Provider:**
Attaches App to the Store.

**Connect:**
Creates container (smart) components and wraps them so they're connected to the Store.

- Accepts mapStateToProps - What state is available to container component as props?
- Accepts mapDispatchToProps - What actions are available to container component as props?

## Immutable JS - https://facebook.github.io/immutable-js/
Enforce state immutability within the app.
To update state, return new object.

## Webpack - https://webpack.github.io/
Webpack is used as an efficient and easy to manage asset bundler for javascript, fonts and styles.