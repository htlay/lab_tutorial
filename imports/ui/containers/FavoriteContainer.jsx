// import { Meteor } from 'meteor/meteor';
// import { createContainer } from 'meteor/react-meteor-data';
// import { connect }  from 'react-redux';
// import FavoritePage from '/imports/ui/pages/FavoritePage.jsx';
// import {Products} from '/imports/api/products/products.js';
//
// const FavoriteContainer = createContainer(({catalogType}) => {
//   let user_id = Meteor.userId();
//   const productSub = Meteor.subscribe('list_products', user_id);
//   let selector = {};
//
//   const products = Products.find(selector).fetch();
//   //console.warn('productSub ', products);
//
//   return {
//     products: products,
//     loading: !productSub.ready()
//   };
//
// }, FavoritePage);
//
// function mapStateToProps(state) {
//   return {
//     catalogType: state.catalogType
//   };
// }
//
// export default connect(mapStateToProps)(FavoriteContainer);
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
