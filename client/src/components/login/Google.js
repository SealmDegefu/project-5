import GoogleLogin, { GoogleLogout } from 'react-google-login';

import React from 'react'

const Google = () => {

	const responseGoogle=(response) =>{
		console.log(response);
		console.log(response.profileObj);
	  }
	return (
		<div>
      <GoogleLogin
      clientId="792553209717-kp5fmcdt1glat6649lag9tcuvqus4kqi.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      />
		</div>
	)
}

export default Google
