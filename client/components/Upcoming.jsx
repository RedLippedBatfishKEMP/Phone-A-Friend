import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { tryingToLogIn, loggingIn, setUser } from '../reducers/reducer';
// import { useNavigate } from 'react-router-dom';
// import UserProfile from '../containers/userProfile';
// import UserContent from '../containers/userContent';
// import Chatroom from '../containers/chatroom';

export default function Upcoming (props) {
  // const username = useSelector((state) => state.reducer.username);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { upcommingFriend, currentMonth, handleClickReconnected } = props;

  return (
    <div className='upcomingFriend'>
      <div className='aptDetail'>
        <div>
          <p>Friend: {upcommingFriend.name}</p>
        </div>
        <div>
          <button className='reconnectedButton' onClick={() => {handleClickReconnected(upcommingFriend.name, upcommingFriend.lastContacted, upcommingFriend.nextContact, currentMonth)}}>Reconnected</button>
        </div>
      </div>
    </div>
  )
}