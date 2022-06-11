import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ArchiveProduct from './ArchiveProduct';



export default function AdminView(props) {

	console.log(props)
	const { storeProducts , fetchData } = props;

	const [ products, setProducts ] = useState([])


	// useEffect(() => {
	// 	setProducts(storeProducts);
	// 	console.log('store Products -> ', storeProducts)
	// }, [storeProducts])




	return(
		<>
			<div className="text-center my-4">
				<h1>Admin Dashboard</h1>
				<AddProduct fetchData={fetchData} />
			</div>
			
			<Table striped bordered hover responsive>
				<thead className="bg-dark text-white">
					<tr>
						<th>ID</th>
						<th>NAME</th>
						<th>DESCRIPTION</th>
						<th>MANUFACTURER</th>
						<th>PRICE</th>
						<th>IMAGE-PATH</th>
						<th>AVAILABILITY</th>
						<th colSpan="2" className='text-center'>ACTIONS</th>

					</tr>
				</thead>

				<tbody>
					{ storeProducts.map(product => 
					<tr key={product._id}>
					<td>{product._id}</td>
					<td>{product.name}</td>
					<td>{product.description}</td>
					<td>{product.manufacturer}</td>
					<td>{parseFloat(product.price).toFixed(2)}</td>
					<td>{product.img}</td>
					<td className={product.isActive ? "text-success" : "text-danger"}>
						{product.isActive ? "Available" : "Unavailable"}
					</td>
					<td>
					<EditProduct product={product._id} fetchData={fetchData}/>
					</td>
					<td>
					<ArchiveProduct product={product._id} isActive={product.isActive} fetchData={fetchData}/>
					</td>
				</tr>) }
				</tbody>
			</Table>

		</>

		)
}