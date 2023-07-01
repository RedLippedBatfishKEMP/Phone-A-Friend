const { FriendInfo } = require('../FriendModel');

const FriendController = {
  // get all friends
  getAllFriends(req, res, next) {
    console.log('get all friends path success');
    FriendInfo.find({}).then((data) => {
      res.locals.getAllFriendsResponse = data;
      return next();
    });
  },
  // create a new friend and add to database
  addFriend(req, res, next) {
    const { name, lastContact, frequency, nextContact } = req.body;

    FriendInfo.create({
      name,
      lastContact,
      frequency,
      nextContact,
    })
      .then((data) => {
        res.locals.addFriendResponse = data;
        return next();
      })
      .catch((err) => {
        return next({
          log: `error in FriendController.addFriend ${err}`,
          status: 400,
          message: { err: 'error occurred when attempting to add friend' },
        });
      });
  },
  // get a friend from the database and send it in the response
  getFriend(req, res, next) {
    // since we use a : in the get, we use .params
    // pull name from after : in get
    const { name } = req.params;
    FriendInfo.findOne({ name: name })
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: 'Friend not found' });
        }
        // store onto res.locals
        res.locals.getFriendResponse = data;
        return next();
      })
      .catch((err) => {
        return next({
          log: `error in FriendController.getFriend ${err}`,
          status: 400,
          message: { err: 'error occurred when attempting to get friend' },
        });
      });
  },
};

// export the controller
module.exports = FriendController;
