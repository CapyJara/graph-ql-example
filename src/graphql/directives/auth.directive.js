const { SchemaDirectiveVisitor, AuthenticationError } = require('apollo-server');
const { defaultFieldResolver } = require('graphql');
const UserModel = require('../../data/user');

module.exports = class AuthDirective extends SchemaDirectiveVisitor {
  visitObject(object) {
    const fields = object.getFields();

    Object.keys(fields).forEach((key) => {
      const field = fields[key];
      this._interceptResolver(field);
    });
  }

  visitFieldDefinition(field) {
    this._interceptResolver(field);
  }

  _interceptResolver(field) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function(...args) {
      const [, , context] = args;

      // *******************************************
      // **** THIS PROCESS IS NOT BEST PRACTICE ****
      // *******************************************
      const username = context.req.headers.username;
      const password = context.req.headers.password;
      if(!username || !password) throw new AuthenticationError('Must provide username and password');

      const validUser = await UserModel.findOne({ username, password });
      if(!validUser) throw new AuthenticationError('Invalid username or password');
      // ********************************************
      // * REPLACE WITH AUTH SERVICE OF YOUR CHOICE *
      // ********************************************

      context.user = validUser;
      return resolve.apply(this, args);
    };
  }
};
