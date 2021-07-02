import React from 'react'

const WeddingRegistry = (props) => {
	return (
		<div>
		{props.user.user_checklists ? props.user.user_checklists.map((user) => {
				return <div>
					{user.list}
				</div>
				}): null}		
		</div>
	)
}

export default WeddingRegistry
