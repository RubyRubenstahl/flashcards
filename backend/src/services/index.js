const users = require('./users/users.service.js');
const todos = require('./todos/todos.service.js');
const incomingMail = require('./mail/incoming/incoming.service');

const mailOutgoing = require('./mail/outgoing/outgoing.service.js');

const projects = require('./projects/projects.service.js');

const companies = require('./companies/companies.service.js');

const appInfo = require('./app-info/app-info.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(todos);
  app.configure(incomingMail);
  app.configure(mailOutgoing);
  app.configure(projects);
  app.configure(companies);
  app.configure(appInfo);
};
