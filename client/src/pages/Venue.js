import React from 'react'

const Venue = (props) => {
	const item  = (id) =>{
		let filteredItem = props.user.user_checklist_items.filter((user) => user.user_checklist_id === props.filteredId)
	 		filteredItem.map(item => {
		//  function handleUpdateChecklist(id) {
			 fetch('/user_checklist_items/' + id, {
			   method: "PATCH",
			   headers: {
				 "Content-Type": "application/json",
			   },
			   body: JSON.stringify({ isCompleted: !item.isCompleted }),
			 })
			   .then((r) => r.json())
			   .then(props.handleToggle);
			   console.log(item)
	 })};



	const filteredItem = props.user.user_checklist_items ? props.user.user_checklist_items.filter((user) => user.user_checklist_id === props.filteredId) : null
	return (
		<div className="venue-container">
		<center>
		<h1 className="venue" style={{paddingTop: "10px"}}>Venue</h1>
				{filteredItem.map((user) => { 
				return ( 
				<div onClick={() =>item(user.id)} className="venue-content">
                <input name="cb" type="checkbox" id="cb"/> 
         	    <label htmlFor="cb">
				<p key={user.id} style={{marginLeft: "8px"}} className={user.isCompleted ? "todo-strike": "todo"}>{user.list}</p>
                </label>
				</div>
				)})}
				</center>
		</div>
	)
}

export default Venue

