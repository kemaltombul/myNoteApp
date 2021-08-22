const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const noteTypeSchema = new Schema(
  {
    noteType: String,
  },
  {
    timestamps: true,
  }
);

const noteType = mongoose.model("noteType", noteTypeSchema);
module.exports = noteType;
