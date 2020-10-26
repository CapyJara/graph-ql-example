const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const init = () => {
  const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  const db = mongoose.connection;

  db.on('connected', () => console.log('Mongoose connected to ' + connectionString));
  db.on('error', () => console.error.bind(console, connectionString + 'MongoDB connection error:'));
};

module.exports = { init };
