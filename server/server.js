const express = require('express');
const app = express();
const path = require('path');

const friendRouter = require('./routes/friendRouter.js');
// const FriendController = require('./controllers/FriendController.js');

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/friend', friendRouter);


if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
  });
}

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
