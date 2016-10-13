import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import { Meteor } from 'meteor/meteor';

import StarWarsStuff from '/imports/client/star-wars-stuff.js';

Meteor.startup(() => {
  const client = new ApolloClient(meteorClientConfig());
  render((
    <ApolloProvider client={client}>
      <Router history={browserHistory}>
        <Route path="/" component={StarWarsStuff} />
      </Router>
    </ApolloProvider>
  ), document.getElementById('app'));
});
