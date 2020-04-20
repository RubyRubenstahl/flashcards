const { Service } = require('feathers-mongodb');

exports.Outgoing = class Outgoing extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('outgoing');
    });
  }
};
