import React from 'react';
import {Link} from 'react-router-dom';

const Venue = (props) => {
	const item  = (id) =>{
		let filteredItem = props.userChecklistItems.filter((item) => item.id === id)
		console.log(filteredItem, "filteredItem")
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




	const filteredItem = props.userChecklistItems ? props.userChecklistItems.filter((user) => user.user_checklist_id === props.filteredId) : null
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
				<Link to="/notes">
				<button style={{backgroundColor: "#356C45", width: "50%", border: "none", color: "white", padding: "8px", borderRadius: "3px", fontSize: "20px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>Take notes</button>
				</Link>
				</center>
		</div>
	)
}

export default Venue

