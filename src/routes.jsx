import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import FrontPage from './FrontPage/frontPage';
import Registration from './Registration/registrationWizard';
import Cart from './Cart/cartWizard';
export default (
  <Route path='/' component={App}>
    <IndexRoute component={FrontPage} />
    <Route path='Register' component={Registration} />
    <Route path='Cart' component={Cart} />
    <Route path='*' component={FrontPage} />
  </Route>
);