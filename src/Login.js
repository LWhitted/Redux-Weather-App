import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { useState } from 'react';

const Login = () => {
    const [firstName, setFirstName] =useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('/createuser', {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        })

    return <div className='login'>
        <h1>Welcome to YourForecast</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <input
        type="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="name" placeholder="FirstName" />
        <input
        type="text"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="name" placeholder="LastName" />
        <input
        type="text"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>

      <Button onclick={handleSubmit} variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
// this form was fine until I added in my backend server.... now it doesn't show up on the page

// return <div className='login'>
//         <h1>Welcome to YourForecast</h1>
//         <Form>
// <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formFirstName">
//         <Form.Label>FirstName</Form.Label>
//         <Form.Control type="name" placeholder="FirstName" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formLastName">
//         <Form.Label>LastName</Form.Label>
//         <Form.Control type="name" placeholder="LastName" />
//         </Form.Group>

//       <Button variant="primary" type="submit">
//         Login
//       </Button>
//     </Form>
//     </div>
    }
};

export default Login;