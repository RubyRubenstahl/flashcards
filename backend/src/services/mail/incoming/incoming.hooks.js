const {parseJson} = require('./parsers')
const {setNow} = require('feathers-hooks-common')
const log = context => {
  console.log(context.data);

  return context
}


const parseEmail = context => {
  const email = context.data;
  context.data = {
    ...email,
    envelope: JSON.parse(email.envelope),
    charsets: JSON.parse(email.charsets),
    attachmentInfo: JSON.parse(email['attachment-info']),
    spamScore: Number(email.spam_score)
  };
  delete context.data['attachment-info'];
  delete context.data['spam_score'];

  return context
}


const createMeta = context => {
  context.data.meta = {
    read: false,
    projectId: null,
    replied: false,
  
  }
}

module.exports = {
  before: {
    all: [log],
    find: [],
    get: [],
    create: [parseEmail, createMeta, setNow('received')],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
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
