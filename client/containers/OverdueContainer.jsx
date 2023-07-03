import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpComing, setOverdue } from '../reducers/reducer';
import Overdue from '../components/Overdue';
// import { useNavigate } from 'react-router-dom';

export default function OverdueFriendList() {
  // const upcomingFriendList = useSelector((state) => state.reducer.overdueFriendList);
  const currentMonth = useSelector((state) => state.reducer.currentMonth);
  const overdueFriendList = useSelector((state) => state.reducer.overdueFriendList);
  // const name = useSelector((state) => state.reducer.name);

  const dispatch = useDispatch();
  // const navigate = useNavigate();
   
  // fetch request to backend with params listed and should get res of both upcoming & overdue list
  // res will be in form of obj { upcoming: [list], overdue: [list]}
  const handleClickReconnected = (name, lastContacted, nextContact, currentMonth) => {
    // console.log('apt', appointment);
    fetch('/friend/reconnected', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, lastContacted, nextContact, currentMonth }),
    })
    .then((res) => res.json())
    .then((res) => {
      // dispatch actions with res.upcoming and res.overdue as payload to update state 
      // so it will re-render all the components contains those states 
      // dispatch(setUpComing(res.due));
      dispatch(setOverdue(res.overdue));
      })
    .catch(err => console.log(err));
  }

  const pastdueFriendList = [];

  // create individule friend component from overdueFriendList array in state and push into pastdueFriendList
  overdueFriendList.forEach(friend => {
    pastdueFriendList.push(< Overdue overdueFriend={friend} currentMonth={currentMonth} handleClickReconnected={handleClickReconnected} />)
  })

  return (
    <div className='overdueFriendsList'>
      <h4>Phone A Friend ASAP List</h4>
      <div className='overdueFriendList'>
        {pastdueFriendList}
      </div>
    </div>
  )
}