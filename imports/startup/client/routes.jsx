import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import MainContainer from '/imports/ui/containers/MainContainer.jsx';
import HomeContainer from '/imports/ui/containers/HomeContainer.jsx';
import ProductContainer from '/imports/ui/containers/ProductContainer.jsx';
import ProductEditContainer from '/imports/ui/containers/ProductEditContainer.jsx';
import ProductInsert from '/imports/ui/components/Products/ProductInsert.jsx';
import SignUp from '/imports/ui/pages/SignUp.jsx';
import SignIn from '/imports/ui/pages/SignIn.jsx';
import LoginSignup from '/imports/ui/pages/LoginSignup.jsx';
import DropsContainer from '/imports/ui/containers/DropsContainer.jsx';
import OneDropContainer from '/imports/ui/containers/OneDropContainer.jsx';

//we're using react router
export default () => (
  <Router history={browserHistory}>
    <Route component={MainContainer}>
      <Route path="/" component={HomeContainer} />
      <Route path="/product/:id" component={ProductContainer} />
      <Route path="/edit/:id" component={ProductEditContainer} />
      <Route path="/drops" component={DropsContainer} />
      <Route path="/drop/:product_id" component={OneDropContainer} />
      <Route path="/insert" component={ProductInsert} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/login" component={LoginSignup} />
    </Route>
  </Router>
);
