const UserModel = require('../user');

const seedUserPassword = 'beetIt';

const User_0 = new UserModel({
  username: 'SultryCelery76',
  name: 'Gerald',
  password: seedUserPassword,
});

const User_1 = new UserModel({
  username: 'PumpkinTom',
  name: 'Emily',
  password: seedUserPassword,
});

const User_2 = new UserModel({
  username: 'Party',
  name: 'Katya Yekaterina Petrovna Zamolodchikova',
  password: seedUserPassword,
});

module.exports = {
  users: [User_0, User_1, User_2]
};
