import React from 'react';
import UserChecklistCard from './UserChecklistCard'

const UserChecklist = (props) => {
	return (
		<div className="checklist-page">
		{props.user.user_checklists ? props.user.user_checklists.map((checklist) => {
				return <UserChecklistCard
				setFilteredId={props.setFilteredId}
				checklist={checklist} 
				key={checklist.id}	
				/>
				}): null}	
		</div>
	)
}

export default UserChecklist
