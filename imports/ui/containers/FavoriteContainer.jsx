
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import FavoritePage from '/imports/ui/pages/FavoritePage.jsx';
import {favoriteproducts} from '/imports/api/favoriteProducts/favoriteProducts.js';
import {Products} from '/imports/api/products/products.js';

export default createContainer((props) => {
  // let userId = Meteor.userId();
  // let user = Meteor.users.findOne({_id: userId});
  let user_id = Meteor.userId();
  console.warn(user_id);


  const FavoriteSub = Meteor.subscribe('list_favorite', user_id);
  const products = Products.find().fetch();
  let selector = {};
  const favorite= favoriteproducts.find(selector).fetch();
  return {
    favorite: favorite,
    products: products,
    loading: !FavoriteSub.ready()
  };
}, FavoritePage);
