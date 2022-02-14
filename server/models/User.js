// import pkg from "mongoose";
// const { Schema, model } = pkg;

// const { Schema, model } = require('mongoose')

// const User = new Schema({
//   username: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
//   roles: [{ type: String, ref: "Role" }],
// });

// export default model("User", User);
// module.exports = model("User", User);

// new code

import mongoose from "mongoose";

const ObjectId = mongoose.ObjectId

const User = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: "Role" }],
  diskSpace: {type: Number, default: 1024**3*10},
  usedSpace: {type: Number, default: 0},
  avatar: {type: String},
  files : [{type: ObjectId, ref:'File'}]
});

export default mongoose.model("User", User);
