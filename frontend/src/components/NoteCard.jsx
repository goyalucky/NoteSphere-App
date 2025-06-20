import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const NoteCard = ({ note, onEdit, deleteNote }) => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      
      {/* Title */}
      <h2 className="text-2xl font-bold mb-3 tracking-wide">{note.title}</h2>

      {/* Description */}
      <p className="text-gray-200 mb-4">{note.description}</p>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-5 mt-4">
        <button
          className="text-yellow-300 hover:text-yellow-400 transition duration-200 text-xl"
          onClick={() => onEdit(note)}
        >
          <FaEdit />
        </button>
        <button
          className="text-red-400 hover:text-red-500 transition duration-200 text-xl"
          onClick={() => deleteNote(note._id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
