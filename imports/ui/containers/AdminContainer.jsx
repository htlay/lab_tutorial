import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AdminPage from '/imports/ui/pages/AdminPage.jsx';
import {Products} from '/imports/api/products/products.js';

export default createContainer((props) => {
  const productSub = Meteor.subscribe('list_products');
  let selector = {};
  // let options = {sort: {rank: 1}};

  const products = Products.find(selector).fetch();
  console.log('AdminContainer',products);
  return {
    products: products,
    loading: !productSub.ready()
  };

}, AdminPage);
