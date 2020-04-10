const users = require('./users/users.service.js');
const rokuKeypress = require('./roku/keypress/keypress.service.js');
const rokuDevices = require('./roku/devices/devices.service.js');
const tv = require('./tv/tv.service.js');
const roku = require('./roku/roku.service.js');
const todos = require('./todos/todos.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(rokuKeypress);
  app.configure(rokuDevices);
  app.configure(tv);
  app.configure(roku);
  app.configure(todos);
};
