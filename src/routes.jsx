import React from 'react';
//import { Route, IndexRoute } from 'react-router';
import { Route } from 'react-router-dom';
import App from './App';
import {FrontPage} from './FrontPage/frontPage';
import {RegistrationWizard} from './Registration/registrationWizard';
import {CartWizard} from './Cart/cartWizard';
export default (
  <Route path='/' component={App}>
    <Route component={FrontPage} />
    <Route path='Register' component={RegistrationWizard} />
    <Route path='Cart' component={CartWizard} />
    <Route path='*' component={FrontPage} />
  </Route>
);