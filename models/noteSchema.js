const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const noteSchema = new Schema(
  {
    noteName: { type: String, require: true },
    note: String,
    noteType: {
      type: mongoose.Types.ObjectId,
      ref: "noteType",
    },
  },
  {
    timestamps: true,
  }
);

const note = mongoose.model("noteSchema", noteSchema);
module.exports = note;
