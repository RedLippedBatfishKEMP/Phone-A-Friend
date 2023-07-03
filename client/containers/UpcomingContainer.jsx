import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpComing } from '../reducers/reducer';
import Upcoming from '../components/Upcoming.jsx';
// import { useNavigate } from 'react-router-dom';

export default function UpcomingFriendList() {
  const upcomingFriendList = useSelector((state) => state.reducer.upcomingFriendList);
  const currentMonth = useSelector((state) => state.reducer.currentMonth);
  // const name = useSelector((state) => state.reducer.name);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // fetch request to backend with params listed and should get res of both upcoming & overdue list
  // res will be in form of obj { upcoming: [list], overdue: [list]}  
  const handleClickReconnected = (name, currentMonth) => {
    // console.log('apt', appointment);
    fetch('/friend/reconnected', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      // all we need for patch req are name and currMonth, removed lastContact and nextContact
      body: JSON.stringify({ name, currentMonth }),
    })
    .then((res) => res.json())
    .then((res) => {
      // dispatch actions with res.upcoming and res.overdue as payload to update state 
      // so it will re-render all the components contains those states
      console.log('type',res)
      dispatch(setUpComing(res.due));
      })
    .catch(err => console.log(err));
    
  }

  const friendList = [];

  // create individule friend component from upcomingFriendList array in state and push into friendList
  upcomingFriendList.forEach(friend => {
    // console.log('line 40', friend);
    // console.log('type', upcomingFriendList)
    // console.log('Array.isArray(upcomingFriendList): ', Array.isArray(upcomingFriendList))
    friendList.push(< Upcoming upcommingFriend={friend} currentMonth={currentMonth} handleClickReconnected={handleClickReconnected} />)
  })

  return (
    <div className='upcomingFriendsList'>
      <h4>This Month's Phone A Friend List</h4>
      <div className='upcomingFriendList'>
        {friendList}
      </div>
    </div>
  )
}