import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import MainLayout from '/imports/ui/layouts/MainLayout.jsx';
import HomeContainer from '/imports/ui/containers/HomeContainer.jsx';
import AdminContainer from '/imports/ui/containers/AdminContainer.jsx';
import ProductContainer from '/imports/ui/containers/ProductContainer.jsx';
import ProductEditContainer from '/imports/ui/containers/ProductEditContainer.jsx';
import ProductInsert from '/imports/ui/components/Products/ProductInsert.jsx';
import ProductDelete from '/imports/ui/components/Products/ProductDelete.jsx';

//we're using react router
export default () => (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={HomeContainer} />
      <Route path="/AdminPage" component ={AdminContainer}/>
      <Route path="/product/:id" component={ProductContainer} />
      <Route path="/edit/:id" component={ProductEditContainer} />
      <Route path ="/delete/:id" component={ProductDelete}/>
      <Route path="/insert" component={ProductInsert} />

    </Route>
  </Router>
);
