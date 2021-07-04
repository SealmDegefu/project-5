import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({ onAddNote, notes, handleAddNote, handleDeleteNote, user, searchText }) => {
	return (
		<div className="notes-list">
		{notes.map((note) => <Note 
		note={note}
		handleDeleteNote={handleDeleteNote}	
		/>)}
		<AddNote 
		user={user}
		onAddNote={onAddNote}
		handleAddNote={handleAddNote} />
		</div>
	)
}

export default NotesList
