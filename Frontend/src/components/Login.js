import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    await axios.post('/api/auth/login', {
        username: username,
        password: password
    }).then(res => {
        console.log(res)
        navigate('/home')
    }).catch(err => {
        console.log(err)
    })
  };

  return (
    <div className="login">
      <p className="title">Login</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="errorMessage">{emailError}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMessage">{passwordError}</p>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => loginUser(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;