const users = require('./users/users.service.js');
const todos = require('./todos/todos.service.js');
const incomingMail = require('./mail/incoming/incoming.service');

const mailOutgoing = require('./mail/outgoing/outgoing.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(todos);
  app.configure(incomingMail);
  app.configure(mailOutgoing);
};
