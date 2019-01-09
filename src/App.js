import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SiderMenu from "components/siderMenu/SiderMenu";
import routes from "./router";
import "./App.scss";

class App extends Component {
  handleSwitchTab(index) {
    routes.map(item => (item.selected = false));
    routes[index].selected = true;
  }


  render() {
    return (
      <Router>
        <div className="app">
          <SiderMenu routes={routes} onSwitchTab={this.handleSwitchTab} />
          <div className="main">
            <Suspense fallback={<div> Loading... </div>}>
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </Switch>
            </Suspense>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
