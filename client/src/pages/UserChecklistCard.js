import React from 'react'
import { Link } from 'react-router-dom'

const UserChecklistCard = ({setFilteredId, checklist}) => {
	return (
	 <div className="card-container">
      <div className="image-container">
        <img top width="100%" style={{height: "16vw"}} src={checklist.image_url} alt="Card image cap"></img>
        </div>
          <div onClick={() => setFilteredId(checklist.id)}className="card-body">
          <Link to={checklist.name} style={{marginTop: "0px", color: "darkgrey", fontSize: "28px", textAlign: "center", justifyContent: "center"}}>{checklist.name}</Link>
        </div>
          <p className="card-paragraph">{checklist.description}</p>
        </div>
	)
}

export default UserChecklistCard
