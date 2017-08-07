import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const favoriteproducts = new Mongo.Collection("favoriteProducts");
//
// favoriteSchema = new SimpleSchema({
//
// });
// favoriteproducts.attachSchema(favoriteSchema);
