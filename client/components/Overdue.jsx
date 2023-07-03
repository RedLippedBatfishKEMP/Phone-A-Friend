import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { tryingToLogIn, loggingIn, setUser } from '../reducers/reducer';
// import { useNavigate } from 'react-router-dom';
import LabeledText from './LabeledText.jsx';

export default function Overdue (props) {
  // const username = useSelector((state) => state.reducer.username);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { overdueFriend, currentMonth, handleClickReconnected } = props;

  const newLastContacted = currentMonth;
  const newNextContact = currentMonth + overdueFriend.frequency;

  return (
    <div className='overdueFriend'>
      <div>
      <LabeledText label="Friend" text={overdueFriend.name} />
      </div>
      <div>
        <button className='reconnectBtn' onClick={() => {handleClickReconnected(overdueFriend.name, newLastContacted, newNextContact, currentMonth)}}>Reconnected</button>
      </div>
    </div>
  )
}