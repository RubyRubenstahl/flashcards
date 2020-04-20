const { authenticate } = require("@feathersjs/authentication").hooks;
const sendgrid = require("@sendgrid/mail");

const createMeta = context => {
  context.data.meta = {
    sent: false,
    projectId: null
  };
};

const sendEmail = async context => {
  const settings = context.app.get("sendgrid");

  sendgrid.setApiKey(settings.apiKey);
  const { to, from, subject, text, html, _id } = context.result;
  const msg = { to, from, subject, text, html, };
  try {
    await sendgrid.send(msg);
    await context.service.patch(_id, { 'meta.sent': true });
  } catch (error) {
    console.error(error);
    await context.service.patch(_id, { "meta.error": error.message });

    if (error.response) {
      console.error(error.response.body);

    }
  }
};

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [createMeta],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [sendEmail],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
