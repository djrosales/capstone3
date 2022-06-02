
import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import logo from '../logo.png';


export default function AppNavbar() {
	const [ user, setUser ] = useState(localStorage.getItem('email'))
	console.log(user)

	return( 
		<>
		<Navbar bg="success" expand="sm" variant="dark" className="px-sm-4 ">
			<Nav.Link as ={Link} to="/"><img src={logo} alt="logo" className='navbar-logo'/></Nav.Link>
			<ul className='navbar-nav align-items-center'>
				<li className='text-brand m-auto'>
				<Nav.Link as ={Link} to="/">eKomersiyoNegosyo</Nav.Link>
				</li>
			</ul>
			
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto">
					<Nav.Link as={Link} to="/">Home</Nav.Link>
					<Nav.Link as={Link} to="/products">Product</Nav.Link>
					

					{/* {(user !== null) ?
						<Nav.Link as={Link} to="/logout">Logout</Nav.Link>

						:
						<> */}
							<Nav.Link as={Link} to="/login">Login</Nav.Link>
							<Nav.Link as={Link} to="/register">Register</Nav.Link>
					


					
				</Nav>
			</Navbar.Collapse>
			
		</Navbar>
		</>

		)
}

//