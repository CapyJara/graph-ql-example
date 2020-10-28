const queryTypes = require('./query.type');
const mutationTypes = require('./mutation.type');
const directiveType = require('./directive.type');
const userTypes = require('./user.type');
const shedTypes = require('./shed.type');
const toolTypes = require('./tool.type');
const gardenTypes = require('./garden.type');
const pagingTypes = require('./paging-type');

module.exports = [
  queryTypes,
  mutationTypes,
  directiveType,
  userTypes,
  shedTypes,
  toolTypes,
  gardenTypes,
  pagingTypes,
];
