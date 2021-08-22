const express = require("express");
const router = express.Router();
const Note = require("../models/noteSchema");

router.get("/", async (req, res) => {
  const notes = await Note.find().populate("noteType");
  res.json(notes);
});

router.post("/", async (req, res) => {
  const { noteName, note, noteType } = req.body;

  const newNote = await Note.create({
    noteName,
    note,
    noteType,
  });

  return res.json(newNote);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { noteName, note, noteType } = req.body;

  const myNote = await Note.findByIdAndUpdate(
    id,
    {
      noteName,
      note,
      noteType,
    },
    {
      new: true,
    }
  );

  return res.json(myNote);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Note.findByIdAndDelete(id);

  res.json(result);
});

module.exports = router;
