import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {} from '../reducers/reducer';
// import { useNavigate } from 'react-router-dom';

export default function addFriend() {
  const dispatch = useDispatch();
  // const triedToLogIn = useSelector((state) => state.reducer.triedToLogIn);
  // useNavigate is no longer supported?
  // const navigate = useNavigate();

  // const add = (name, lastContact, frequency) => {
  //   fetch('/friend/addFriend', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, lastContact, frequency }),
  //   });
    // .then((res) => res.json())
    // .then((res) => {
    //   dispatch(setUser(res.id));
    //   dispatch(tryingToLogIn(res.loggedIn));
    //   if (res.loggedIn) {
    //     dispatch(setName(res.user.name));
    //   }
    // });
  // };

 // fetch request to backend with params listed and will not need a response body
 const handleClickAdd = (name, lastContact, frequency, nextContact) => {
  fetch('server/addfriend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, lastContact, frequency, nextContact }),
  });
  // will not need a response body to update any state
  // .then((res) => res.json())
  // .then((res) => {
  //   dispatch(setUser(res.id));
  //   dispatch(tryingToLogIn(res.loggedIn));
  //   if (res.loggedIn) {
  //     dispatch(setName(res.user.name));
  //   }
  // });
};

// add friend container/component will be just a form to obtain required data and a submit button to 
// handle click event to send a post request to the backend with the input values from the form
return (
  <div className="addFriend">
    <div className="addFriendForm">
      <form>
        <div className="mb-3">
          <label className="form-label">Friend's Name</label>
          <input
            placeholder="friend's name"
            type="text"
            className="form-input"
            id="friendName"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last contacted</label>
          <input
            placeholder="month 1-12"
            type="text"
            className="form-input"
            id="lastContacted"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Frequency</label>
          <input
            placeholder="month 1-12"
            type="text"
            className="form-input"
            id="frequency"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Add Friend"
            className='addBtn'
            onClick={(event) => {
              event.preventDefault();
              // invoke func to send post request to backend
              handleClickAdd(
                document.querySelector('#friendName').value,
                document.querySelector('#lastContacted').value,
                document.querySelector('#frequency').value,
                document.querySelector('#lastContacted').value + document.querySelector('#frequency').value,
              );
              // clear all input area after click
              document.querySelector('#friendName').value = '';
              document.querySelector('#lastContacted').value = '';
              document.querySelector('#frequency').value = '';
            }}
          />
        </div>
      </form>
    </div>
  </div>
);
}
