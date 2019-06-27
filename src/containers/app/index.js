import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/';

export const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </div>
);

export default App;
