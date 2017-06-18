/*
 * Npm import
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/*
 * Local import
 */
// Components
import Nav from 'src/components/Nav';

// Containers
import Shortener from 'src/containers/Shortener';
import Urls from 'src/containers/Urls';


/*
 * Code
 */
const App = () => (
  <div id="app">
    <Nav />

    <Switch>
      <Route exact location={location} path="/" component={Shortener} />
      <Route exact location={location} path="/urls" component={Urls} />

      {/* Useful for github pages */}
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </div>
);


/*
 * Export default
 */
export default App;
