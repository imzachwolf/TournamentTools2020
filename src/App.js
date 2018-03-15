import React, { Component } from 'react';
 import {FrontPage} from './FrontPage/frontPage';
import './content/bootstrap.css';
import './content/site.css';
import {RegistrationWizard} from "./Registration/registrationWizard";


class App extends Component {
  render() {
    return (
      <div className="App">
        <RegistrationWizard/>
         {/*<FrontPage tournamentId="2" />*/}
        Howdy
      </div>
    );
  }
}

export default App;

