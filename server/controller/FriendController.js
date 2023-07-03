const { current } = require('@reduxjs/toolkit');
const FriendInfo = require('../FriendModel');

const FriendController = {
  // create a new friend and add to database
  addFriend(req, res, next) {
    const { name, lastContact, frequency } = req.body;
    FriendInfo.create({
      name,
      lastContact: Number(lastContact),
      frequency: Number(frequency),
      nextContact: Number(lastContact) + Number(frequency),
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
    const { newMonth } = req.body;
    FriendInfo.find({ nextContact: { $lte: newMonth } })
      .then((data) => {
        const overdue = [];
        const due = [];
        data.forEach(entry => {
          if (entry.nextContact < newMonth) overdue.push(entry);
          else due.push(entry);
        })
        res.locals.friendData = {
          overdue,
          due,
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
        const newNextContact = currentMonth + data[0].frequency;
        return newNextContact;
      }).catch((err) => {
        return next({
          log: `error in FriendController.reconnect ${err}`,
          status: 400,
          message: {
            err: 'error occurred when attempting to find data',
          },
        })
      })
      .then((data) => {
        FriendInfo.findOneAndUpdate({ name: name }, { lastContact: currentMonth, nextContact: data }, { new: true })
        .then((data) => {
          return next();
          }
        )
      })
      // .then(data => {
      //   res.locals.document = data;
      // }) 
      // .catch((err) => {
      //   return next({
      //     log: `error in FriendController.reconnect ${err}`,
      //     status: 400,
      //     message: {
      //       err: 'error occurred when attempting to update data',
      //     },
      //   });
      // })
      // .then(FriendInfo.find({ nextContact: { $lte: currentMonth } })
      // .then((data) => {
      //   const overdue = [];
      //   const due = [];
      //   data.forEach(entry => {
      //     if (entry.nextContact < currentMonth) overdue.push(entry);
      //     else due.push(entry);
      //   })
      //   res.locals.document = {
      //     overdue,
      //     due,
      //   };
      //   return next();
      // }))
      // );
      
  },

  getList(req, res, next) {
    const { name, currentMonth } = req.body;
    FriendInfo.find({ nextContact: { $lte: currentMonth } })
    .then((data) => {
      const overdue = [];
      const due = [];
      data.forEach(entry => {
        if (entry.nextContact < currentMonth) overdue.push(entry);
        else due.push(entry);
      })
      res.locals.document = {
        overdue,
        due,
      };
      return next();
    })
  }

};

// export the controller
module.exports = FriendController;
