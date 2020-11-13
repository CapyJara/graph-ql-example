const queryTypes = require('./query.type');
const mutationTypes = require('./mutation.type');
const directiveType = require('./directive.type');

const userTypes = require('./user.type');
const pagingTypes = require('./paging-type');

// TODO REMOVE
console.log('**********\nTYPE DEFS:\n', [
  queryTypes,
  mutationTypes,
  userTypes,
  pagingTypes
].map(t => t.definitions.map(d => d.name)));

module.exports = [
  queryTypes,
  mutationTypes,
  directiveType,

  userTypes,
  pagingTypes
];
