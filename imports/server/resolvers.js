import Meteor from 'meteor/meteor';
import StarWarsStuff from '/imports/server/starwarsstuff.js';

const resolveFunctions = {
  Query: {
    starwarsstuff(root, args, context) {
      return StarWarsStuff.find().fetch();
    },
  },
};

export default resolveFunctions;
