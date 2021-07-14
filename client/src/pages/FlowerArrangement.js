import React from 'react'
import {Link} from 'react-router-dom';

const FlowerArrangement = (props) => {
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
		<div className="flowerarrangement-container">
		<center>
		<h1 className="flowerarrangement" style={{paddingTop: "10px"}}>Flower Arrangement</h1>
				{filteredItem.map((user) => { 
				return ( 
				<div className="flowerarrangement-content">
                <input onClick={() =>item(user.id)} name="cb" type="checkbox" id="cb"/> 
         	    <label htmlFor="cb">
				<p key={user.id} style={{marginLeft: "8px"}} className={user.isCompleted ? "todo-strike": "todo"}>{user.list}</p>
                </label>
				</div>
				)})}
				<div className="flowerarrangement">
				<Link to="/notes">
				<button style={{backgroundColor: "#C1828C", width: "50%", border: "none", color: "white", padding: "8px", borderRadius: "3px", fontSize: "20px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>Take notes</button>
				</Link>
				</div>
				</center>
		</div>
	)
}

export default FlowerArrangement
