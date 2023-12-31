import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { tryingToLogIn, loggingIn, setUser } from '../reducers/reducer';
// import { useNavigate } from 'react-router-dom';
import LabeledText from './LabeledText.jsx';

export default function Upcoming (props) {
  // const username = useSelector((state) => state.reducer.username);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { upcommingFriend, currentMonth, handleClickReconnected } = props;

  const newLastContacted = currentMonth;
  const newNextContact = currentMonth + upcommingFriend.frequency;


  return (
    <div className='upcomingFriend'>
      <div>
      <LabeledText label="Friend" text={upcommingFriend.name} />
        {/* <p>Friend: {upcommingFriend.name}</p> */}
      </div>
      <div>
        <button className='reconnectBtn' onClick={() => {handleClickReconnected(upcommingFriend.name, newLastContacted, newNextContact, currentMonth)}}>Reconnected</button>
      </div>
    </div>
  )
}