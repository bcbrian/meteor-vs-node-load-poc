import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import { Meteor } from 'meteor/meteor';

import StarWarsStuff from '/imports/client/star-wars-stuff.js';

Meteor.startup(() => {
  const networkInterface = createNetworkInterface('http://127.0.0.1/graphql');
  const client = new ApolloClient(networkInterface);
  render((
    <ApolloProvider client={client}>
      <Router history={browserHistory}>
        <Route path="/" component={StarWarsStuff} />
      </Router>
    </ApolloProvider>
  ), document.getElementById('app'));
});
