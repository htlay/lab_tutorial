import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

import {favoriteproducts} from '/imports/api/favoriteProducts/favoriteProducts.js';

// Meteor.methods({
//   deleteProduct: function(productID, userID){
//     console.log("deleteId", productID);
//
//     let userID = Meteor.users.findOne({_id: this.userId}).profile.user_id;
//     let favorite = favoriteproducts.remove({product_id:productID, user_id: userID});
//     if(favorite){
//       return "success";
//     }else{
//         return "error";
//     }
//   },
//
// });
Meteor.methods({
    deleteProduct: function(productID, username) {
    let selector = {
      product_id: productID,
      username: username
    };
    let favorite = favoriteproducts.remove(selector);
    if(favorite) {
        return "success";
    } else {
        return "error";
    }
  },

});
