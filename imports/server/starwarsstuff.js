import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import starwarsstuffs from '/imports/data/starwarsstuff.js';

const StarWarsStuff = new Mongo.Collection("starwarsstuff");

export default StarWarsStuff;

export function loadData(){
  return Meteor.startup(()=>{
    if(StarWarsStuff.find().count() < 1){
      console.log('Loading Data ...');
      starwarsstuffs.forEach((sws)=>{
        StarWarsStuff.insert(sws.fields);
      });
    }
  });
}
