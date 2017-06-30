import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Reviews } from '/imports/api/reviews/reviews.js';

Meteor.methods({
      insertReview: function(productId, stars) {

      let insertValue = {
        product_id: productId,
        user_id: this.user_id,
        stars: stars
      }
      let reviewId = Reviews.insert(insertValue);

    if(reviewId) {
        return "success";
    } else {
        return "error";
    }

  },

});
