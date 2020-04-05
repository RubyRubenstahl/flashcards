// tv-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "tv";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: { type: String, required: true },
      icon: { type: String, default: 'tv'},
      roku: {
        ip: { type: String, required: true },
        port: { type: Number, default: 1900 },
        initialized: { type: Boolean, default: false },
        data: {
          type: Object,
          default: {},
        },
      },
      lirc: {
        ip: { type: String },
        port: { type: Number, default: 8765 },
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
