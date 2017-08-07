import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

import {favoriteProducts} from '/imports/api/favoriteProducts/favoriteProducts.js';

Meteor.methods({
  removeFavorite: function(productID){
    let product = favoriteProducts.remove(productID);
    console.log("deleteId", product);
    if(product){
      return "Success!!";
    }else{
        return "Error!!";
    }
  },

});
