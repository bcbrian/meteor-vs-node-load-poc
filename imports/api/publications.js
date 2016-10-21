import { Meteor } from 'meteor/meteor';
import StarWarsStuff from './starwarsstuff';

Meteor.publish('StarWarsStuff', function swsPub() {
  console.log('DATA');
  return StarWarsStuff.find({});
});
