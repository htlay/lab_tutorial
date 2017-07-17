import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { connect }  from 'react-redux';
import HomePage from '/imports/ui/pages/HomePage.jsx';
import {Products} from '/imports/api/products/products.js';

const HomeContainer = createContainer(({catalogType}) => {
  const productSub = Meteor.subscribe('list_products');
  let selector = {};

  const products = Products.find(selector).fetch();
  //console.warn('productSub ', products);

  return {
    products: products,
    loading: !productSub.ready()
  };

}, HomePage);

function mapStateToProps(state) {
  return {
    catalogType: state.catalogType
  };
}

export default connect(mapStateToProps)(HomeContainer);
