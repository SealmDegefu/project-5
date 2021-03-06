import React from 'react'
import {Link} from 'react-router-dom';

const WeddingRegistry = (props) => {
	const item  = (id) =>{
		let filteredItem = props.userChecklistItems.filter((item) => item.id === id)
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
		<div className="wedding-container">
		<center>
		<h1 className="wedding" style={{paddingTop: "10px"}}>Wedding Registry</h1>
				{filteredItem.map((user) => { 
				return ( 
				<div onClick={() =>item(user.id)} className="wedding-content">
                <input name="cb" type="checkbox" id="cb"/> 
         	    <label htmlFor="cb">
				<p key={user.id} style={{marginLeft: "8px"}} className={user.isCompleted ? "todo-strike": "todo"}>{user.list}</p>
                </label>
				</div>
				)})}
				<Link to="/notes">
				<button style={{backgroundColor: "#C9A28F", width: "60%", border: "none", color: "white", padding: "8px", borderRadius: "3px", fontSize: "20px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>Take notes</button>
				</Link>
				</center>
		</div>
	)
}

export default WeddingRegistry
