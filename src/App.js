import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppWrapper,Header,Button } from "./App.style";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;

    return (
      <AppWrapper>
        <Header>
          <img src={dog || logo} className="App-logo" alt="logo" />
        </Header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <Button primary disabled>Fetching...</Button>
        ) : (
          <Button primary onClick={onRequestDog}>Request a Dog</Button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
