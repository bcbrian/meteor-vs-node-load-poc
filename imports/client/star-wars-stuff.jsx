import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Meteor } from 'meteor/meteor';


class StarWarsStuff extends Component {
  render() {
    return this.props.loading ? (<h1>LOADING</h1>) : (
      <pre id="starwarsstuff">
        { JSON.stringify(this.props.starwarsstuff, null, 2) }
      </pre>
    );
  }
}

StarWarsStuff.propTypes = {
  starwarsstuff: React.PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const qsws = gql`
  query qsws{
    starwarsstuff: starwarsstuff{
      _id
    }
  }
`;

const StarWarsStuffWithData = graphql(qsws, {
  props: ({ data: { loading, starwarsstuff } }) => ({
    loading,
    starwarsstuff: starwarsstuff || [],
  }),
})(StarWarsStuff);

export default StarWarsStuffWithData;
