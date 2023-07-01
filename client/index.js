/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

// import React from 'react';
// import { createRoot } from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './App.jsx';
// import { store } from './store';
// // import { BrowserRouter } from 'react-router-dom';

// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import './stylesheets/styles.css';
import { Provider } from 'react-redux';
import { store } from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
