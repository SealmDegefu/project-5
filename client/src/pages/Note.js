import React from 'react'
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/profiles", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({...formData, user_id: user.id}),
		})
		  .then((r) => r.json())
		  .then((newProfile) => {
			setFormData(initialState);
			onAddProfile(newProfile);
		  });
		  console.log("hey")
		  history.push('/myprofile')
	  }

	return (
		<div className="note">
			<span>{text}</span>
			<div className="note-footer">
			<small>{date}</small>
			<MdDeleteForever 
			onClick={() => handleDeleteNote(id)} 
			className="delete-icon" 
			size="1.3em" />
			</div>
		</div>
	)
}

export default Note

// style={{position: "relative", left: "80px"}} 