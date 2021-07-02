import React from 'react'

const Bridesmaids = (props) => {

	function handleDeleteSpice(id) {
		fetch('/me/user_checklist_items'+ id, {
		  method: "DELETE",
		}).then((r) => {
		  if (r.ok) {
			props.onDeleteItem();
		  }
		});
	  }


	const filteredItem = props.user.user_checklist_items ? props.user.user_checklist_items.filter((user) => user.user_checklist_id === props.filteredId) : null
	return (
		<div className="bridesmaids-container">
		<center>
		<h1 className="bridesmaids" style={{paddingTop: "10px"}}>Bridesmaids</h1>
				{filteredItem.map((user) => { 
				return ( 
				<div onClick={() => handleDeleteSpice(user.id)} className="bridesmaids-content">
                <input name="cb" type="checkbox" id="cb"/> 
         	    <label for="cb">
				<p style={{marginLeft: "8px"}} class="strikethrough">{user.list}</p>
                </label>
				</div>
				)})}
				</center>
		</div>
	)
}

export default Bridesmaids
