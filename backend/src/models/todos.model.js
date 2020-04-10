// todos-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const { Types } = require('mongoose');
module.exports = function(app) {
  const modelName = "todos";
  const mongooseClient = app.get("mongooseClient");
  const { Schema, } = mongooseClient;
  const schema = new Schema(
    {
      task: { type: String, required: true },
      description: { type: String },
      userId: { type: Types.ObjectId, required: true },
      due: {
        mode: {
          type: String,
          enum: ["on", "by"],
          required: true
        },
        value: {
          type: {},
          required: true
        }
      },
      completed: { type: Boolean },
      repeat: {
        mode: {
          type: String,
          default: "once",
          enum: ["weekly", "once"],
          required: true
        },

      }
    },
    {
      timestamps: true
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
