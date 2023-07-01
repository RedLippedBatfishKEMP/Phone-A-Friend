/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import { Switch, Route } from 'react-router-dom';

import Cats from './components/Cat.jsx';
import './stylesheets/styles.css';
import React from 'react';
import MainContainer from './containers/MainContainer.jsx';

const App = () => {
  console.log('im here');
  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default App;
