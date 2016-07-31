# Pluralsite Admin App

This is the codebase for Plural site's [Building Applications with React and Redux in ES6 course by Cory House](https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents)


## Architecture


### React

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

### Redux

Store:

Reducers:

Actions:

### Immutable JS

### Webpack

### Testing


## Scripts

All automated build scripts are defined in the package.json file.

`Start`:

`Test`:
