import { useState, useEffect,useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

// import axios from 'axios';


export default function Login() {

	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	//button
	const [ isActive, setIsActive ] = useState(true);

	useEffect(() => {
		if(email !== '' && password !== '') {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [email, password])

	function authentication(e) {
		e.preventDefault();

	fetch('http://localhost:4000/users/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(response => response.json())
		.then(data => {
			console.log(data)
			if(data.accessToken !== undefined){
				localStorage.setItem('accessToken', data.accessToken);
				setUser({
					accessToken: data.accessToken
				})
				Swal.fire({
					title: 'Yaay!',
					icon: 'success',
					text: 'Welcome to eKomersiyoNegosyo!'
				})
				//get user's details from our token
				fetch('http://localhost:4000/users/details', {
					headers:{
						Authorization: `Bearer ${data.accessToken}`
					}
				})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					
					if(data.isAdmin === true){
						localStorage.setItem('isAdmin', data.isAdmin)
						setUser({
							isAdmin: data.isAdmin
						})
						//push to the /products
						navigate ('/products')
					}else{
						//If not an admin, push to '/' (homepage)
						navigate('/')
					}
				})
			}else{
				Swal.fire({
					title: 'Ooopsss',
					icon: 'error',
					text: 'Something went wrong. Check your credentials'
				})
				
			}
			setEmail('');
			setPassword('');

		})

	}




	//button
	/* const [ isActive, setIsActive ] = useState(true);

	useEffect(() => {
		if(email !== '' && password !== '') {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [email, password]) */

	/* function authentication(e) {
		e.preventDefault(); */

		//Set the email of the authenticated user in the localStorage
		//localStorage.setItem('propertyName', value)
		//setItem to store information in localStorage
		// localStorage.setItem('email', email);


		//clear inputs
		/* setEmail('');
		setPassword('');

		Swal.fire({
			title: 'Yay!',
			icon: 'success',
			text: `You are now login. Enjoy shopping!`
		})
	} */

	return(
		
		(user.accessToken !== null) ?

		<Navigate to="/products" />

		:
		
          <div className="form-container mt-5 pb-3">
		<Form onSubmit={e => authentication(e)}>
            <h1 className='white-text'>Login</h1>
			<Form.Group>
				<small className='white-text '>Email Address</small>
				<input
                    className="form-field my-0"
				    type="email"
				    placeholder="Enter email"
				    required
				    value={email}
				    onChange={e => setEmail(e.target.value)}
				    />
			</Form.Group>

			<Form.Group>
				<small className='white-text'>Password</small>
				<input
                    className="form-field my-0"
				    type="password"
				    placeholder="Enter your Password"
				    required
				    value={password}
				    onChange={e => setPassword(e.target.value)}
				    />
			</Form.Group>
	
			{ isActive ?
			<Button type="submit" className="form-field my-4" id="btn">
				Login
			</Button>
			:
			<Button type="submit" className="form-field my-4 " id="btn" disabled>
				Login
			</Button>
			}
			
		</Form>
        </div>

		)
}
