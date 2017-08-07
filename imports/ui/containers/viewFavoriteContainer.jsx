import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import viewFavoritePage from '/imports/ui/pages/viewFavoritePage.jsx';
import {favoriteProducts} from '/imports/api/favoriteProducts/favoriteProducts.js';
import {Products} from '/imports/api/products/products.js';

export default createContainer((props) => {
  let userId = Meteor.userId();
  let username = props.params.username;

  const FavoriteSub = Meteor.subscribe('list_favorite', username);
  const products = Products.find().fetch();
  let selector = {};
 const favorite = favoriteProducts.find(selector).fetch();
  return {
    favorite: favorite,
    products: products,
    loading: !FavoriteSub.ready()
  };
}, viewFavoritePage);
