import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

import StarWarsStuff from './star-wars-stuff';

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={StarWarsStuff} />
    </Router>
  ), document.getElementById('app'));
});
