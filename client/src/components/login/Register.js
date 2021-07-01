import React, { useState } from 'react';
import logo from '../../logo.png';
import { Alert,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Register = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [wedding_date, setWeddingDate] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        wedding_date,
		zipcode
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

	return (
		<form onSubmit={handleSubmit}>
        <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
            <div className="image">
                <img style={{height: "10em"}} src={logo} alt="logo"/>
            </div>
            <Form>
                <FormGroup>
                    <Label for="username">Username: </Label>
                    <Input type="text" name="username"
                    placeholder="username"
                    style={{marginBottom: "5px"}}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password" style={{marginRight: "10px"}}>Password: </Label>
                    <Input type="password" name="password" placeholder="password"
                    style={{marginBottom: "5px"}}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                      />
                </FormGroup>
                <FormGroup>
                    <Label for="password" style={{marginRight: "10px"}}>Password Confirmation:</Label>
                    <Input type="password"
                    name="password"
                    id="password_confirmation"
                    placeholder="password"
                    style={{marginBottom: "5px"}}
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="date" style={{marginRight: "10px"}}>Wedding Date: </Label>
                    <Input type="date" name="wedding_date"
                    placeholder="date placeholder"
                    value={wedding_date}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    />
                </FormGroup>
				<FormGroup>
                    <Label for="hobbies" style={{marginRight: "10px"}}>Zipcode: </Label>
                    <Input type="text" name="zipcode"
                    placeholder="zipcode"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    />
                </FormGroup>
            </Form>
          </div>
          <div className="footer">
            <Button style={{backgroundColor: "#DEC088", border: "none"}}>
            {isLoading ? "Loading..." : "Sign Up"}
            </Button>
            {errors.map((err) => (
        <Alert color="danger" style={{marginTop: "10px"}} key={err}>{err}</Alert>
        ))}
          </div>
        </div>
        </form>
	)
}

export default Register