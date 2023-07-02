const FriendInfo = require('../FriendModel');

const FriendController = {
  // create a new friend and add to database
  addFriend(req, res, next) {
    const { name, lastContact, frequency, nextContact } = req.body;
    console.log('line 7', req.body);
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

  nextMonth(req, res, next) {
    const { nextMonth } = req.params;
    FriendInfo.find({ nextContact: nextMonth })
      .then((data) => {
        res.locals.upcomingFolks = data;
        return next();
      })
      .catch((err) => {
        return next({
          log: `error in FriendController.nextMonth ${err}`,
          status: 400,
          message: {
            err: 'error occurred when attempting to find upcoming contacts',
          },
        });
      });
  },

  reconnected(req, res, next) {},
};

// export the controller
module.exports = FriendController;
