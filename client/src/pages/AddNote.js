import React, { useState } from 'react'
import axios from 'axios'

const date = new Date()
const initialState = {
	text: "",
	date: date.toLocaleDateString()
  }

const AddNote = ({ onAddNote, handleSubmit}) => {
	const [noteText, setNoteText] = useState(initialState)

	const characterLimit =  200;

	function handleChange(e) {
		if(characterLimit - e.target.value.length >=0){
		setNoteText({[e.target.name]: e.target.value})
		}
	  }
//post notes
	function handleSubmit(e) {
		e.preventDefault();
		console.log(noteText)
		axios
		.post('/notes', noteText)
		.then(response => {
			console.log(response)
		})
		.catch(error => {
			console.log(error)
		})
		setNoteText(initialState)
		}

	const handleSaveClick = (e) =>{
			if(noteText.text.trim().length > 0){
			onAddNote(noteText)
		}
		}

	return (
		<div className="note new">
		<form onSubmit={handleSubmit}>
			<textarea 
			rows="8" 
			cols="10" 
			placeholder='Type to add a note...'
			name="text"
			value={noteText.text}
			onChange={handleChange}
			></textarea>
			<div className="note-footer">
				<small>{characterLimit - noteText.text.length} Remaining</small>
				<button onClick={handleSaveClick} className="save">Save</button>
			</div>
				</form>
		</div>
	)
}

export default AddNote;
