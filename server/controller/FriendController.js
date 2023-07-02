const { current } = require('@reduxjs/toolkit');
const FriendInfo = require('../FriendModel');

const FriendController = {
  // create a new friend and add to database
  addFriend(req, res, next) {
    const { name, lastContact, frequency } = req.body;
    console.log('line 7', req.body);
    FriendInfo.create({
      name,
      lastContact,
      frequency,
      nextContact: lastContact + frequency,
    })
      .then((data) => {
        console.log('line 15', data)
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
    const { newMonth } = req.body;
    FriendInfo.find({ nextContact: { $lte: newMonth + 1 } })
      .then((data) => {
        const overdue = [];
        const due = [];
        const upcoming = [];
        data.forEach(entry => {
          if (entry.nextContact < newMonth) overdue.push(entry);
          else if (entry.nextContact === newMonth) due.push(entry);
          else upcoming.push(entry);
        })
        res.locals.friendData = {
          overdue,
          due,
          upcoming
        };
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

  reconnected(req, res, next) {
    const { name, currentMonth } = req.body;
    FriendInfo.find({ name: name })
      .then(data => {
        const entryFrequency = data.frequency;
      }).catch((err) => {
        return next({
          log: `error in FriendController.reconnect ${err}`,
          status: 400,
          message: {
            err: 'error occurred when attempting to find data',
          },
        })
      })
    .then(FriendInfo.findOneAndUpdate({ name: name }, { nextContact: currentMonth }, { new: true })
      .then(data => {
        console.log(data)
        res.locals.document = data;
        return next();
      }) 
      .catch((err) => {
        return next({
          log: `error in FriendController.reconnect ${err}`,
          status: 400,
          message: {
            err: 'error occurred when attempting to update data',
          },
        });
      }));
      
  },
};

// export the controller
module.exports = FriendController;
