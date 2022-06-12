import { useState, useContext, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
import { useParams, Link, useNavigate } from 'react-router-dom';


export default function SpecificProduct() {

	const navigate = useNavigate();
	const { productId } = useParams();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);


	useEffect(() => {

		fetch(`http://localhost:4000/products/${ productId }`)
		.then(res => res.json())
		.then(data => {
			setName(data.name)
			setDescription(data.description)
			setPrice(data.price)
		})

	}, [])

	const { user } = useContext(UserContext);
	const order = (productId) => {

		fetch('http://localhost:4000/orders/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			},
			body: JSON.stringify({
				productId: productId
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data){
				Swal.fire({
					title: 'Successfully checkout!',
					icon: 'success',
					text: `You have successfully ordered for this ${ name } product`
				})
				navigate('/products')
			} else {
				Swal.fire({
					title: 'error!',
					icon: 'error',
					text: 'Something went wrong, please try again'
				})
			}
		})
	}

	return(
		<Container>
			<Card>
				<Card.Header>
					<h4>{ name }</h4>
				</Card.Header>

				<Card.Body>
					<Card.Text>{ description }</Card.Text>
					<h6>Price: Php { price } </h6>
				</Card.Body>
				<Card.Footer>
				{ user.accessToken !== null ?
					<Button variant="primary" onClick={() => order(productId)}>Checkout</Button>
					:
					<Button variant="warning" as={ Link } to="/login">Login to add to cart</Button>
				 }
				</Card.Footer>
			</Card>
		</Container>

		)
}