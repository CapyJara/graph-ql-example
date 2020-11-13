const queryTypes = require('./query.type');
const mutationTypes = require('./mutation.type');
const directiveType = require('./directive.type');
const pagingTypes = require('./paging-type');

const userTypes = require('./user.type');
const dogTypes = require('./dog.type');
const toyTypes = require('./toy.type');

module.exports = [
  queryTypes,
  mutationTypes,
  directiveType,
  pagingTypes,

  userTypes,
  dogTypes,
  toyTypes,
];
