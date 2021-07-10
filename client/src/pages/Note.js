import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const date = new Date()
const initialState = {
 date: date.toLocaleDateString()
}

const Note = ({ note, handleDeleteNote }) => {
	const [ getDate, setGetDate ] = useState(initialState)
	const { id } = note
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
	  setOpen(true);
	};
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		  return;
		}
	
		setOpen(false);
	  };

	function handleDeleteProfile() {
		fetch(`/notes/${id}`, {
			method: "DELETE",
		  }).then((r) => {
			  if (r.ok) {
				  handleDeleteNote(note);
			  }
		  });
		  	console.log(note)
		  handleClick();
	  }
	

	return (
		<div className="note">
			<span className="note-font">{note.text}</span>
			<div className="note-footer">
			<small>{getDate.date}</small>
			<MdDeleteForever 
			onClick={handleDeleteProfile} 
			className="delete-icon" 
			size="1.3em" />
			</div>
			<Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
			<React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
		/>
		</div>
	)
}

export default Note

// style={{position: "relative", left: "80px"}} 