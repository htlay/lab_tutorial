import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const droporders = new Mongo.Collection("drops");
