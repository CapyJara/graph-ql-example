const path = require('path');
require('dotenv').config({ path: path.join(__dirname, `../../../.env.${process.env.NODE_ENV}`) });
const db = require('../db');
const data = require('./seedData');
const UserModel = require('../user');

db.init();

(async() => {
  try {
    await removeOldSeedData();
    await insertSeedData();
  }
  catch(e) {
    console.log(e);
  }
})();

async function removeOldSeedData() {
  const seedUsernames = data.users.map(u => u.username);
  const users = await UserModel.find({ username: { $in: seedUsernames } }).lean();
  const userIds = users.map(u => u._id);

  await UserModel.deleteMany({ _id: { $in: userIds } });

  console.log('Old seed data removed');
}

const modelFunctions = {
  users: async(user) => await UserModel.create(user)
};

async function insertSeedData() {
  try {
    const collections = Object.keys(data);
    await Promise.all(collections.map(async c => {
      await Promise.all(data[c].map(async doc => {
        await modelFunctions[c](doc);
      }));
    }));
    console.log('Database seeded');
  }
  catch(e) {
    console.log(e);
  }
}
