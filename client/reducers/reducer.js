import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentMonth: null,
  upcomingFriendList: [],
  overdueFriendList: [],
};

export const reducer = createSlice({
  name: 'reducer',
  initialState,
  // Below `reducers` field allow us to define reducers and generate associated actions
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setUpComing: (state, action) => {
      state.upcomingFriendList = action.payload;
    },
  },
});

export const { setUpComing } = reducer.actions;

export default reducer.reducer;
