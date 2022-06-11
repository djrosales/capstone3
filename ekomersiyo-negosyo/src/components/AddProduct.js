
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function AddProduct({fetchData}) {

	//Add state for the forms of adding a product
	const [ name, setName ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ price, setPrice ] = useState(0);
    const [ img, setImg ] = useState('');
    const [ manufacturer, setManufacturer ] = useState('');
  

	//States for opening and closing the modals
	const [ showAdd, setShowAdd ] = useState(false);

	//Functions to handle opening and closing the Modal
	const openAdd = () => setShowAdd(true);
	const closeAdd = () => setShowAdd(false); 

	//function for adding a product
	const addProduct = (e) => {
		e.preventDefault();

		fetch('http://localhost:4000/products/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			},
			body: JSON.stringify({
				name: name,
                img: img,
                price: price,
                manufacturer: manufacturer,
				description: description
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if(data){
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Product successfully added.'
				})

				closeAdd()
			
				fetchData()
			}else {
				Swal.fire({
					title: 'error',
					icon: 'error',
					text: 'Please try again'
				})

				fetchData()
			}

			//reset all states input
            setName('')
			setDescription('')
			setPrice(0)
			setImg('')
			setManufacturer('')
		})


	}

	return(
		<>
			<Button variant="primary" onClick={openAdd}>Add New Product</Button>

			{/* Add Modal */}

			<Modal show={showAdd} onHide={closeAdd}>
				<Form onSubmit={e => addProduct(e)}>
					<Modal.Header closeButton>
						<Modal.Title>Add Product</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control 
							      type="text"
							      required
							      value={name}
							      onChange={e => setName(e.target.value)}
							 />
						</Form.Group>

						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control 
							      type="text"
							      required
							      value={description}
							      onChange={e => setDescription(e.target.value)}
							 />
						</Form.Group>

						<Form.Group>
							<Form.Label>Price</Form.Label>
							<Form.Control 
							      type="number"
							      required
							      value={price}
							      onChange={e => setPrice(e.target.value)}
							 />
						</Form.Group>
                        <Form.Group>
							<Form.Label>Manufacturer</Form.Label>
							<Form.Control 
							      type="text"
							      required
							      value={manufacturer}
							      onChange={e => setManufacturer(e.target.value)}
							 />
						</Form.Group>
                       {/*  <Form.Group>
							<Form.Label>Image-path</Form.Label>
							<Form.Control 
							      type="text"
							      required
							      value={img}
							      onChange={e => setImg(e.target.value)}
							 />
						</Form.Group> */}
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={closeAdd}>Close</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>

				</Form>
			</Modal>
		</>











		)
}