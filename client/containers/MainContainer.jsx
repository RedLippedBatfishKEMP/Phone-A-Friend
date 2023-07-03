/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders
 *
 * ************************************
 */

import React from 'react';
// import from child components...
import OverdueContainer from './OverdueContainer.jsx';
import UpcomingContainer from './UpcomingContainer.jsx';
import FriendContainer from './FriendContainer.jsx';
import TimeTravelContainer from './TimeTravelContainer.jsx';
// import ShowInitContainer from './ShowInitContainer.jsx';
import '../stylesheets/styles.css';


const MainContainer = (props) => {
  return (
    <div className="container">
      <div className="outerBox">
        <h1 className="header" id="header">
          Phone a Friend
        </h1>
        {/* Start adding components here... */}
        {console.log('inside div in main')}
        {/* <ShowInitContainer /> */}
        <FriendContainer />
        <OverdueContainer />
        <UpcomingContainer />
        <TimeTravelContainer />
      </div>
    </div>
  );
};

export default MainContainer;
