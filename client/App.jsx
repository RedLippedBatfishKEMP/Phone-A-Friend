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

// import { Switch, Route } from 'react-router-dom';

// import Friends from './components/Friend.jsx';
import './stylesheets/styles.css';
import React, { useState } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import ShowInitState from './containers/ShowInitContainer';
const App = () => {
  const logIn = () => {
    setLoggedIn(true)
  }
  const [loggedIn, setLoggedIn] = useState(false);
  console.log('im here');
  return (
    <div>
      {loggedIn ? (
      <MainContainer />
      ) : (
      <ShowInitState logIn = {logIn} />
      )}
    </div>
  );
};

export default App;
