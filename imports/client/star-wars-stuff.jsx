import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import SWS from '../api/starwarsstuff';


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

export default StarWarsStuffContainer = createContainer(() => {
  const swsHandle = Meteor.subscribe('StarWarsStuff');
  const loading = !swsHandle.ready();
  let starwarsstuff = [];
  if (!loading) {
    console.log('Not loading');
    starwarsstuff = SWS.find().fetch();
  }
  return {
    loading,
    starwarsstuff,
  };
}, StarWarsStuff);
