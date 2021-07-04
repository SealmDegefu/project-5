import React from 'react'
import {Link} from 'react-router-dom';

const Bridesmaids = (props) => {
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
		<div className="bridesmaids-container">
		<center>
		<h1 className="bridesmaids" style={{paddingTop: "10px"}}>Bridesmaids</h1>
				{filteredItem.map((user) => { 
				return ( 
				<div onClick={() =>item(user.id)} className="bridesmaids-content">
                <input name="cb" type="checkbox" id="cb"/> 
         	    <label htmlFor="cb">
				<p key={user.id} style={{marginLeft: "8px"}} className={user.isCompleted ? "todo-strike": "todo"}>{user.list}</p>
                </label>
				</div>
				)})}
				<div className="bridesmaids">
				<Link to="/notes">
				<button style={{backgroundColor: "#91ABB0", width: "50%", border: "none", color: "white", padding: "8px", borderRadius: "3px", fontSize: "20px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>Take notes</button>
				</Link>
				</div>
				</center>
		</div>
	)
}

export default Bridesmaids
