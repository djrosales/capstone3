import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';


export default function EditProduct({ product, fetchData }){

	//states for editProduct modal
	const [ showEdit, setShowEdit ] = useState(false)

	//state hook for the product data
	const [productId, setProductId] = useState('');
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [img, setImage] = useState('');
	const [price, setPrice] = useState(0.00);

    


	//function openEdit to still get the data to the form while opening the modal
	const openEdit = (ProductId) => {
		fetch(`http://localhost:4000/products/${ productId }`)
		.then(res => res.json())
		.then(data => {
			console.log(data)

			//populate all input values with the product information that we fetched
			setProductId(data._id)
			setName(data.name)
			setDescription(data.description)
            setManufacturer(data.manufacturer)
			setPrice(data.price)
            setImage(data.img)
		})

		setShowEdit(true)
	}


	//Function to handle the closing of modal and reset all relevant states back to their default value
	const closeEdit = () => {
		setShowEdit(false)
		setName('')
		setDescription('')
        setManufacturer('')
		setPrice(0.00)
        setImage('')
	}

	//a function to change or update the specific product
	const editProduct = (e, productId) => {
		e.preventDefault();

		fetch(`http://localhost:4000/products/${ productId }`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ localStorage.getItem('accessToken') }`
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price,
                manufacturer:manufacturer,
                img:img
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if(data === true){
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Product successfully updated!'
				})
				fetchData()
				closeEdit()
			}else {
				Swal.fire({
					title: 'error',
					icon: 'error',
					text: 'Please try again'
				})

				fetchData()
				closeEdit()
			}
		})
	}


	return(
		<>
			<Button variant="primary" size="sm" onClick={() => openEdit(product)}>Update</Button>

		{/*Edit Modal*/}

			<Modal show={showEdit} onHide={closeEdit}>
				<Form onSubmit={e => editProduct(e, productId)}>
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
							<Form.Label>Manufacturer</Form.Label>
							<Form.Control 
							      type="text"
							      required
							      value={manufacturer}
							      onChange={e => setManufacturer(e.target.value)}
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
							<Form.Label>Image</Form.Label>
							<Form.Control 
							      type="text"
							      required
							      value={img}
							      onChange={e => setImage(e.target.value)}
							 />
						</Form.Group>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={closeEdit}>Close</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>

				</Form>
			</Modal>

		</>


		)
}