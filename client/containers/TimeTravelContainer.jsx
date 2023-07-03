import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpComing, setOverdue, setMonth } from '../reducers/reducer';
// import { useNavigate } from 'react-router-dom';
import LabeledText from '../components/LabeledText.jsx';

export default function NextMonth() {
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
  const handleClick = (newMonth) => {
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
      })
    .catch(err => console.log(err));
  }

  // let newMonth = currentMonth + 1;
  let currentMonthToShow;
  if (currentMonth % 12 === 0) currentMonthToShow = 12;
  else currentMonthToShow = currentMonth % 12;


  return (
    <div>
      <h4>Let's Time Travel!</h4>
    <div className='timeTravelBox'>
      <div className='currentMonth'>
      <LabeledText label="Current Month" text={currentMonthToShow} />
        {/* <p>Current Month: {currentMonthToShow}</p> */}
      </div>
      <div>
          <button className='nextMonthBtn' onClick={() => {handleClick(currentMonth + 1)}}>Next Month</button>
      </div>
      <div>
          <button className='next6MonthBtn' onClick={() => {handleClick(currentMonth + 6)}}>Next 6 Months</button>
      </div>
    </div>
    </div>
  )
}