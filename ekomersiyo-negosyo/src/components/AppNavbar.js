import { useState, useContext} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import { Component } from 'react';
import logo from '../logo.png';
import {ButtonCart, ButtonSign} from './Button';


export default function AppNavbar() {
 const { user } = useContext(UserContext);
/* 	const [ user, setUser ] = useState(localStorage.getItem('email'))*/
	// console.log(user) 

	return( 
	
		<Navbar bg="dark" expand="sm" variant="dark" className="nav-border px-sm-4">
			<Nav.Link as ={Link} to="/"><img src={logo} alt="logo" className='navbar-logo'/></Nav.Link>
			<ul className='navbar-nav align-items-center'>
				<li className='m-auto'>
				<Nav.Link as ={Link} to="/" className='text-brand'>eKomersiyoNegosyo</Nav.Link>
				</li>
			</ul>
			
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto">
					{/* <Nav.Link as={Link} to="/" className='text-brand'>Home</Nav.Link> */}
					<Nav.Link as={Link} to="/products" className='text-brand'>
						<ButtonCart>
							<span className='mx-2'>
							<i className="fa fa-cart-plus" />
						</span>
						Products&nbsp;
						</ButtonCart>
						</Nav.Link>
					

						{(user.accessToken !== null) ?
						<Nav.Link as={Link} to="/logout">Logout</Nav.Link>

						:
						<> 
						<Nav.Link as={Link} to="/register" className='text-brand'>
								<ButtonSign>&nbsp;SIGNUP&nbsp; </ButtonSign></Nav.Link>	

								</>
						}
				</Nav>
			</Navbar.Collapse>
		
			
		</Navbar>
	

		)
}

