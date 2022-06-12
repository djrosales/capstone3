import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { NavLink } from "react-router-dom";
import UserContext from '../UserContext';
import { Navigate, useNavigate } from 'react-router-dom';
import React from 'react';

export default function Registration() {
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ mobileNo, setMobileNo ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ verifyPassword, setVerifyPassword ] = useState('');
	const [ isActive, setIsActive ] = useState(true);

	useEffect(() => {
		if((firstName !== '' && lastName !== '' && mobileNo !== '' && email !== '' && password !== '' && verifyPassword !== '') && (password === verifyPassword)){
			setIsActive(true);
		}else {
			setIsActive(false);
		}
	}, [firstName, lastName, mobileNo, email, password, verifyPassword])


	function registerUser(e) {
		e.preventDefault();

		fetch('http://localhost:4000/users/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				firstName:firstName,
				lastName: lastName,
				email: email,
				password: password,
				mobileNo: mobileNo
			})
		})
		.then(response => response.json())
		.then(data => {
			if(data!== undefined){
				localStorage.setItem('data', data);
				setUser({
					data: data
				})
				navigate ('/products')
			
				Swal.fire({
					title: 'Yaay!',
					icon: 'success',
					text: 'You are now registered. Enjoy shopping!'
				})
			}
				else{
					Swal.fire({
						title: 'Ooopsss',
						icon: 'error',
						text: 'Something went wrong. Check your credentials.'
					})
				}
				
				setFirstName('');
				setLastName('');
				setEmail('');
				setPassword('');
				setPassword('');
				setVerifyPassword ('');
				setMobileNo('');
})

	}
    return (
		(user.accessToken !== null) ? 

		<Navigate to="/courses" />
		:
    <div className="form-container mt-5 pb-4">
        <Form className="form-layout" onSubmit={e => registerUser(e)}>
		    <h1 className='white-text'>Register</h1>
			<Form.Group>
                    <input
                    className="form-field"
				    type="text"
				    placeholder="Enter First Name"
				    required
				    value={firstName}
				    onChange={e => setFirstName(e.target.value)}
                    />
                {<span id="error">Please enter your first name</span> }
			</Form.Group>
			<Form.Group>
                    <input
                    className="form-field"
				    type="text"
				    placeholder="Enter Last Name"
				    required
				    value={lastName}
				    onChange={e => setLastName(e.target.value)}
                    />
                {<span id="error">Please enter your last name</span> }
			</Form.Group>
			<Form.Group>
                    <input
                    className="form-field"
				    type="number"
				    placeholder="Enter mobile number"
				    required
				    value={mobileNo}
				    onChange={e => setMobileNo(e.target.value)}
                    />
                {<span id="error">Please enter mobile number</span> }
			</Form.Group>
			<Form.Group>
                    <input
                    className="form-field"
				    type="email"
				    placeholder="Enter email"
				    required
				    value={email}
				    onChange={e => setEmail(e.target.value)}
                    />
                {<span id="error">Please enter an email</span> }
			</Form.Group>

			<Form.Group>
                <input
                    className="form-field"
				    type="password"
				    placeholder="Enter your Password"
				    required
				    value={password}
				    onChange={e => setPassword(e.target.value)}
				    />
					{ <span id="error">Please enter a password</span> }
			</Form.Group>

			<Form.Group>
                <input
                    className="form-field"
				    type="password"
				    placeholder="Verify Password"
				    required
				    value={verifyPassword}
				    onChange={e => setVerifyPassword(e.target.value)}
				    />
					 {<span id="error">Please verify your password</span> }
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
