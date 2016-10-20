import Meteor from 'meteor/meteor';
import StarWarsStuff from './starwarsstuff';

const resolveFunctions = {
  Query: {
    starwarsstuff() {
      return StarWarsStuff.find().fetch();
    },
  },
};

export default resolveFunctions;
