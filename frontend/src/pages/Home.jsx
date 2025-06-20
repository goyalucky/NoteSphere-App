import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NoteModal from '../components/NoteModal';
import axios from 'axios';
import NoteCard from '../components/NoteCard';
import { toast } from 'react-toastify';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]);  // Corrected initial state
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [query, setQuery] = useState('');

  // Fetch notes when component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  // Filter notes based on search query
  useEffect(() => {
    setFilteredNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.description.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  // Function to fetch all notes from backend
  const fetchNotes = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/note', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setNotes(data.notes);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to close modal and reset current note
  const closeModal = () => {
    setModalOpen(false);
    setCurrentNote(null);
  };

  // Open modal for editing a note
  const onEdit = (note) => {
    setCurrentNote(note);
    setModalOpen(true);
  };

  // Add a new note
  const addNote = async (title, description) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/note/add',
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      if (response.data.success) {
        fetchNotes();
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/note/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      if (response.data.success) {
        toast.success('note deleted successfully');
        fetchNotes();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Edit a note
  const editNote = async (id, title, description) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/note/${id}`,
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      if (response.data.success) {
        fetchNotes();
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar setQuery={setQuery} />

      <div className="px-8 pt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onEdit={onEdit}
              deleteNote={deleteNote}
            />
          ))
        ) : (
          <p>No Notes</p>
        )}
      </div>

      {/* Floating Add Note Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold p-4 rounded-full"
      >
        +
      </button>

      {/* Modal for Add/Edit Note */}
      {isModalOpen && (
        <NoteModal
          closeModal={closeModal}
          addNote={addNote}
          currentNote={currentNote}
          editNote={editNote}
        />
      )}
    </div>
  );
};

export default Home;
