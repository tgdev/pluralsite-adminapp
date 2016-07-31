import React, { PropTypes } from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Site Header</p>
        {this.props.children} // passed from React Router
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
