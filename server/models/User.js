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

const User = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: "Role" }],
});

export default mongoose.model("User", User);
