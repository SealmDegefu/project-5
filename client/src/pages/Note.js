import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md';

const date = new Date()
const initialState = {
 date: date.toLocaleDateString()
}

const Note = ({ note, handleDeleteNote }) => {
	const [ getDate, setGetDate ] = useState(initialState)
	const { id } = note
	function handleDeleteProfile() {
		fetch(`/notes/${id}`, {
			method: "DELETE",
		  }).then((r) => {
			  if (r.ok) {
				  handleDeleteNote(note);
			  }
		  });
		  console.log(getDate)
	  }
	

	return (
		<div className="note">
			<span>{note.text}</span>
			<div className="note-footer">
			<small>{getDate.date}</small>
			<MdDeleteForever 
			onClick={handleDeleteProfile} 
			className="delete-icon" 
			size="1.3em" />
			</div>
		</div>
	)
}

export default Note

// style={{position: "relative", left: "80px"}} 