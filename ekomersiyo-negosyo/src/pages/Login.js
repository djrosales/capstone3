import { useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';


export default function Login() {

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

		//Set the email of the authenticated user in the localStorage
		//localStorage.setItem('propertyName', value)
		//setItem to store information in localStorage
		localStorage.setItem('email', email);


		//clear inputs
		setEmail('');
		setPassword('');

		Swal.fire({
			title: 'Yay!',
			icon: 'success',
			text: `You are now login. Enjoy shopping!`
		})
	}

	return(
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
			<Button variant="" type="submit" className="form-field my-4" id="btn">
				Login
			</Button>
			:
			<Button variant="" type="submit" className="form-field my-4 " id="btn" disabled>
				Login
			</Button>
			}
		</Form>
        </div>

		)
}
