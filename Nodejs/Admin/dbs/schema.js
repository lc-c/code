var mongoose=require('mongoose');
var Schema=mongoose.Schema;

module.exports = {
  user: new Schema(
    {
      name: { type: String },
      psd: { type: String }
    },
    { collection: "user" }
  ),

  advertising: new Schema(
    {
      name: { type: String, index: 1 },
      title: { type: String },
      address: { type: String }
    },
    { collection: "advertising" }
  ),

  recruit: new Schema(
    {
      name: { type: String, index: 1 },
      status: { type: String },
      portrayal: { type: String },
      people: { type: String },
      time: { type: Number },
      update: { type: Date, default: new Date() }
    },
    { collection: "recruit" }
  ),

  apply: new Schema(
    {
      name: { type: String, index: 1 },
      status: { type: String },
      portrayal: { type: String },
      people: { type: String },
      time: { type: Number },
      update: { type: Date, default: new Date() }
    },
    { collection: "apply" }
  )
};