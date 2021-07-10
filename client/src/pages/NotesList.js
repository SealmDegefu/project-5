import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({ onAddNote, notes, setNotes, handleAddNote, handleDeleteNote, user, searchText }) => {
	return (
		<div className="notes-list">
		{notes.map((note) => <Note 
		note={note}
		handleDeleteNote={handleDeleteNote}	
		/>)}
		<AddNote 
		setNotes={setNotes}
		notes={notes}
		user={user}
		onAddNote={onAddNote}
		handleAddNote={handleAddNote} />
		</div>
	)
}

export default NotesList
