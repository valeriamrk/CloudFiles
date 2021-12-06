// import { Schema, model } from "mongoose";

// const { Schema, model } = require('mongoose')

// const Role = new Schema({
//   value: {type: String, unique: true, default: "USER"},
// })

// export default model('Role', Role)

// module.exports = model("Role", Role);

// new code

import mongoose from "mongoose";

const Role = new mongoose.Schema({
  value: { type: String, unique: true, default: "USER" },
});

export default mongoose.model("Role", Role);
