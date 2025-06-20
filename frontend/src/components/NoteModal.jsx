import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NoteModal = ({ closeModal, addNote, currentNote, editNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setDescription(currentNote.description);
    }
  }, [currentNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentNote) {
      editNote(currentNote._id, title, description);
    } else {
      addNote(title, description);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="backdrop-blur-lg bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-2xl w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {currentNote ? '✏️ Edit Note' : '📝 Add New Note'}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note Title"
            className="bg-gray-700 text-white border border-gray-600 p-3 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Note Description"
            rows="4"
            className="bg-gray-700 text-white border border-gray-600 p-3 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-lg font-semibold transition duration-300"
          >
            {currentNote ? 'Update Note' : 'Add Note'}
          </button>
        </form>

        <button
          onClick={closeModal}
          className="mt-4 text-red-400 hover:text-red-500 text-sm block mx-auto transition duration-200"
        >
          Cancel
        </button>
      </motion.div>
    </div>
  );
};

export default NoteModal;
