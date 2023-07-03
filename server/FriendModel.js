const mongoose = require('mongoose');
require('dotenv').config();
// const { number } = require('prop-types');
// const Schema = mongoose.Schema;
const uri = process.env.MONGO_URI;
// make sure to make MongoDB in the cloud and not local
// need to create MongoDB and add URI here and password
console.log(process.env.MONGO_URI);

mongoose.connect(
  // interact in terminal, mongosh = Mongo Shell, terminal mongosh to start
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // insert DB name here
    dbName: 'Phone-A-Friend',
  }
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const friendSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  lastContact: { type: Number, required: true },
  frequency: { type: Number, required: true },
  nextContact: { type: Number, required: true },
});
module.exports = mongoose.model('FriendInfo', friendSchema);
// export model through module.exports
// need 2 args, name of collection and rule set (schema)
// module.exports = mongoose.model('collectionName', friendSchema);
