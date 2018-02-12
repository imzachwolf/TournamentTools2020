import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDom.render(<App />, document.getElementById('root'));

registerServiceWorker();

// ReactDom.render(
//     <Router  routes={routes}>

//     </Router>
//     //document.querySelector('#app')
//   );