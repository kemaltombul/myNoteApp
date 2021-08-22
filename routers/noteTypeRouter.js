const express = require("express");
const router = express.Router();
const NoteType = require("../models/noteTypeSchema");

//###
router.get("/", async (req, res) => {
  const type = await NoteType.find();
  return res.json(type);
});

//###
router.post("/", async (req, res) => {
  const noteType = req.body.noteType;

  if (noteType === "" || noteType === undefined) {
    return res.json({ message: "Tür adı geçersiz." });
  } else {
    const type = await NoteType.create({ noteType });
    return res.json(type);
  }
});

//###
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const noteType = req.body.noteType;

  if (id === "" || id === undefined) {
  } else {
    const type = await NoteType.findByIdAndUpdate(
      id,
      { noteType },
      { new: true }
    );
    res.json(type);
  }
});

//###
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await NoteType.findByIdAndDelete(id);
  res.json(result);
});

module.exports = router;
