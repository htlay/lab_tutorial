import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
// import { check } from 'meteor/check';
import { Products } from '/imports/api/products/products.js';

Meteor.methods({
  deleteproduct: function(productID) {

    let product = Products.remove(productID);
    console.log("deleteId", product);

    if(product) {
      return "Success!!";
    } else {
      return "Error!!";
    }


  },

});
