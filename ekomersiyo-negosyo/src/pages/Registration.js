import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { NavLink } from "react-router-dom";
import React from 'react';
//import './App.css';

export default function Register() {
    //state hooks to store the values of the input fields
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ verifyPassword, setVerifyPassword ] = useState('');

	//state for the enable/disable button
	const [ isActive, setIsActive ] = useState(true);

	useEffect(() => {
		//Validation to enable submit button..
		if((email !== '' && password !== '' && verifyPassword !== '') && (password === verifyPassword)){
			setIsActive(true);
		}else {
			setIsActive(false);
		}
	}, [email, password, verifyPassword])


	function registerUser(e) {
		e.preventDefault();

		//Clear input fields
		setEmail('');
		setPassword('');
		setVerifyPassword('');

		Swal.fire({
			title: 'Yaaaaaaaaaaaay!',
			icon: 'success',
			text: 'You have successfully registered!'
		})
	}
    return (
       
    <div className="form-container mt-5 pb-4">
        <Form onSubmit={e => registerUser(e)}>
		    <h1 className='white-text'>Register</h1>
			<Form.Group>
				{/* <Form.Label></Form.Label> */}
				{/* <Form.Control  */}
                    <input
                    class="form-field"
				    type="email"
				    placeholder="Enter email"
				    required
				    value={email}
				    onChange={e => setEmail(e.target.value)}
                    />
				
				{/* <Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text> */}
                {<span id="first-name-error">Please enter an email</span> }
			</Form.Group>

			<Form.Group>
				{/* <Form.Label></Form.Label> */}
				{/* <Form.Control  */}
                  
                <input
                    class="form-field"
				    type="password"
				    placeholder="Enter your Password"
				    required
				    value={password}
				    onChange={e => setPassword(e.target.value)}
				    />
					{ <span id="last-name-error">Please enter a password</span> }
			</Form.Group>

			<Form.Group>
				{/* <Form.Label></Form.Label> */}
				{/* <Form.Control  */}
                
                <input
                    class="form-field"
				    type="password"
				    placeholder="Verify Password"
				    required
				    value={verifyPassword}
				    onChange={e => setVerifyPassword(e.target.value)}
				    />
					 {<span id="email-error">Please verify your password</span> }
			</Form.Group>
              
			{isActive ?
				<Button type="submit" className="form-field" id="btn">Register</Button>
				:
				<Button type="submit" className="form-field" id="btn" disabled>Register</Button>
			}
			<small className='white-text'>Already have an account? <NavLink to="/login" style={{textDecoration:'none'}}>Click here</NavLink> to log in.</small>
			
		</Form>
        </div>
        
    
    )
}