import React from 'react'

const Footer = () => {
	return (
		<div className="footer">
			<p className="footer-paragraph">
			<p>Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.</p>
              &copy;{new Date().getFullYear()} Bride<span style={{textDecoration: "line-through"}}>zilla</span> | All rights reserved |
              Terms Of Service | Privacy 
            </p>
		</div>
	)
}

export default Footer