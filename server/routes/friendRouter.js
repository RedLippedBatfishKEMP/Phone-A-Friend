const express = require('express');
const app = express();
const path = require('path');

const friendRouter = express.Router();
const FriendController = require('../controller/FriendController.js');

// get all friends in db
friendRouter.get('/', FriendController.getAllFriends, (req, res) => {
  res
    .header(
      'Access-Control-Allow-Methods',
      'GET',
      'PUT',
      'POST',
      'DELETE',
      'OPTIONS'
    )
    .header('Access-Control-Allow-Origin', 'http://localhost:8080')
    .header('Access-Control-Allow-Credentials', 'true');

  return res.status(200).json(res.locals.getAllFriendsResponse);
});

// add friend to db
friendRouter.post('/', FriendController.addFriend, (req, res) => {
  return res.status(200).json(res.locals.addFriendResponse);
});

// find friend in db by name
// : means we are sending info along with the route
friendRouter.get('/:name', FriendController.getFriend, (req, res) => {
  return res.status(200).json(res.locals.getFriendResponse);
});

module.exports = friendRouter;
