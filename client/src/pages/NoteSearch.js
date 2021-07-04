import React from 'react'
import { MdSearch } from 'react-icons/md';

const NoteSearch = ( {handleSearchNote }) => {
	return (
		<div>
		<h1 className="notes-header">Notes</h1>
		<div className="search">
		<MdSearch className="search-icons" size="1.3em" />	
		<input onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="type to search..." />
		</div>
		</div>
	)
}

export default NoteSearch
