import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import ThirdPage from '/imports/ui/pages/ThirdPage.jsx'
import MainLayout from '/imports/ui/layouts/MainLayout.jsx';
import HomeContainer from '/imports/ui/containers/HomeContainer.jsx';
import SecondPage from '/imports/ui/pages/SecondPage.jsx';


//we're using react router
export default () => (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={HomeContainer} />
      <Route path="/cali_yogo-strawberry" component={SecondPage} />
      <Route path="/page3" component={ThirdPage} />
    </Route>
  </Router>
);
