import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

import './Login.css';

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [cookies, setCookie] = useCookies();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // console.log('cook', cookies);

  const createUser = async (e) => {
    e.preventDefault();
      await axios.post('/api/auth/register', {
            username: username,
            email: email,
            password: password
        }).then(res => {
            console.log(res)
            navigate('/home')
        }).catch(err => {
            console.log(err)
        })
    };

  console.log(emailError, passwordError);
  return (
    <div className="login">
      <p className="title">Signup</p>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="errorMessage">{emailError}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
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
        <Button variant="primary" type="submit" onClick={(e) => createUser(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;