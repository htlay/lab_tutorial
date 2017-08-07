import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { favoriteproducts } from '/imports/api/favoriteProducts/favoriteProducts.js';

Meteor.methods({
      insertfavorite: function(productId, insertValue) {
      insertValue.user_id = Meteor.userId();
      let favoriteId = favoriteproducts.insert(insertValue);
    if(favoriteId) {
        return "success";
    } else {
        return "error";
    }

  },

});
