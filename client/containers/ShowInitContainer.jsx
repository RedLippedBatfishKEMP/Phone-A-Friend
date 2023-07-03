import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpComing, setOverdue, setMonth } from '../reducers/reducer';
// import { useNavigate } from 'react-router-dom';

export default function ShowInitState( {logIn} ) {
  const upcomingFriendList = useSelector((state) => state.reducer.upcomingFriendList);
  const currentMonth = useSelector((state) => state.reducer.currentMonth);
  const overdueFriendList = useSelector((state) => state.reducer.overdueFriendList);
  // const name = useSelector((state) => state.reducer.name);

  // don't need this if response from backend comes with both upcoming and overdue
  // const newOverdue = [...overdueFriendList, ...upcomingFriendList];


  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // fetch request to backend with new month num and should get res of both upcoming & overdue list
  // res will be in form of obj { upcoming: [list], overdue: [list]}
  const handleClickShow = (newMonth) => {
    // console.log('apt', appointment);
    fetch('/friend/timeTravel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newMonth }),
    })
    .then((res) => res.json())
    .then((res) => {
      // dispatch actions with res.upcoming and res.overdue as payload to update state 
      // so it will re-render all the components contains those states 
      dispatch(setUpComing(res.due));
      dispatch(setOverdue(res.overdue));
      dispatch(setMonth(newMonth));
      // event.target.style.display = 'none';
      logIn();
      })
    .catch(err => console.log(err));
  }

  // let newMonth = currentMonth + 1;
  let currentMonthToShow = currentMonth % 12;

  return (
    <div className='showInitState'>
      <h1>Phone a Friend</h1>
      <div>
          <button className='show' onClick={() => {handleClickShow(currentMonth)}}>Login</button>
      </div>
    </div>
  )
}