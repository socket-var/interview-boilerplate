import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { connectReduxAction } from "./redux/actions";

import routes from "./routes/appRoutes";

class App extends Component {
  componentDidMount() {
    this.props.connectReduxAction();
  }

  render() {
    return (
      <Router>
        {routes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          );
        })}
        <div className="App">{this.props.message}</div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  message: state.basic.message
});

const mapDispatchToProps = {
  connectReduxAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
