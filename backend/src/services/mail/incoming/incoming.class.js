const { Service } = require('feathers-mongodb');

exports.Incoming = class Incoming extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('incoming');
    });
  }
};
