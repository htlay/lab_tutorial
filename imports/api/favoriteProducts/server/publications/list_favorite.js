import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {favoriteproducts} from '/imports/api/favoriteProducts/favoriteProducts.js';
import { Products } from '/imports/api/products/products.js';
import { _ } from 'meteor/underscore';

Meteor.publish("list_favorite", function(userId){
  let selector = {
    user_id: userId
  };
  let favoriteCursor = favoriteproducts.find(selector);
  let favorite = favoriteCursor.fetch();
  let productIds = _.pluck(favorite, 'product_id');
  let productsCursor = Products.find({_id: {$in: productIds}});
  let products = productsCursor.fetch();

  return (favoriteCursor,productsCursor);
});
