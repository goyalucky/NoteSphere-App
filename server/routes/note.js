import express from 'express';
import Note from '../models/Note.js';
import middleware from '../middleware/middleware.js';

const router = express.Router();

router.post('/add', middleware, async (req, res) => {
  try {
    const { title, description } = req.body;

    const newNote = new Note({
      title,
      description,
      userId: req.user.id  // ✅ fixed here
    });

    await newNote.save();

    return res.status(200).json({ success: true, message: "Note created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Error in Adding Note" });
  }
});

router.get('/', middleware, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    return res.status(200).json({ success: true, notes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Can't retrieve notes" });
  }
});

router.put('/:id', middleware, async (req, res) => {
  try {
    const id = req.params.id;
    const updatedNote = await Note.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedNote) {
      return res.status(404).json({ success: false, message: "Note not found" });
    }

    return res.status(200).json({ success: true, note: updatedNote });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Can't update note" });
  }
});

router.delete('/:id', middleware, async (req, res) => {
  try {
    const id = req.params.id;
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ success: false, message: "Note not found" });
    }

    return res.status(200).json({ success: true, message: "Note deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Can't delete note" });
  }
});

export default router;
