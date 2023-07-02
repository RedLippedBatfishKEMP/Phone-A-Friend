import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpComing } from '../reducers/reducer';
// import Upcoming from './components/upcoming';
// import { useNavigate } from 'react-router-dom';

export default function UpcomingFriendList() {
  const upcomingFriendList = useSelector(
    (state) => state.reducer.upcomingFriendList
  );
  const currentMonth = useSelector((state) => state.reducer.currentMonth);
  // const name = useSelector((state) => state.reducer.name);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleClickReconnected = (
    name,
    lastContacted,
    nextContact,
    currentMonth
  ) => {
    // console.log('apt', appointment);
    fetch('/server/reconnected', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, lastContacted, nextContact, currentMonth }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(setUpComing(res.upcoming));
      })
      .catch((err) => console.log(err));
  };

  const friendList = [];

  upcomingFriendList.forEach((friend) => {
    friendList.push(
      <Upcoming
        upcommingFriend={friend}
        currentMonth={currentMonth}
        handleClickReconnected={handleClickReconnected}
      />
    );
  });

  return (
    <div className="upcomingFriends">
      <h4>This Month's Phone A Friend List</h4>
      <div className="upcomingFriendList">{friendList}</div>
    </div>
  );
}
