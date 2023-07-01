import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {} from '../reducers/reducer';
import { useNavigate } from 'react-router-dom';

export default function addFriend() {
  const dispatch = useDispatch();
  // const triedToLogIn = useSelector((state) => state.reducer.triedToLogIn);
  const navigate = useNavigate();

  const add = (name, lastContact, frequency, nextContact) => {
    fetch('server/addfriend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, lastContact, frequency, nextContact }),
    });
    // .then((res) => res.json())
    // .then((res) => {
    //   dispatch(setUser(res.id));
    //   dispatch(tryingToLogIn(res.loggedIn));
    //   if (res.loggedIn) {
    //     dispatch(setName(res.user.name));
    //   }
    // });
  };

  return (
    <div className="background-pic-signup">
      <div className="main-div">
        <form>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              placeholder="username"
              type="text"
              className="form-control"
              id="username"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              placeholder="name"
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              placeholder="Age"
              type="text"
              className="form-control"
              id="age"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Breed</label>
            <input
              placeholder="breed"
              type="text"
              className="form-control"
              id="breed"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <input
              placeholder="gender"
              type="text"
              className="form-control"
              id="gender"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Birthday</label>
            <input
              placeholder="MM/DD/YYYY"
              type="text"
              className="form-control"
              id="birthday"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              placeholder="city"
              type="text"
              className="form-control"
              id="city"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              placeholder="password"
              type="password"
              className="form-control"
              id="password"
            />
            {userError}
          </div>
          <div>
            <input
              type="submit"
              value="Sign Up"
              onClick={(event) => {
                event.preventDefault();
                login(
                  document.querySelector('#username').value,
                  document.querySelector('#password').value,
                  document.querySelector('#name').value,
                  document.querySelector('#age').value,
                  document.querySelector('#breed').value,
                  document.querySelector('#gender').value,
                  document.querySelector('#birthday').value,
                  document.querySelector('#city').value
                );
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}