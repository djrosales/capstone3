import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function ArchiveProduct({ product, isActive, fetchData}) {
	const archiveToggle = (productId) => {
		fetch(`http://localhost:4000/products/${ productId }/archive`,{
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('accessToken')}`
			}
		})
		.then(res => res.json())
		.then(data =>{
			if(data === true) {
				Swal.fire({
					title: '',
					icon: 'success',
					text: 'This product is now unavailable.'
				})
				fetchData()
			}else {
				Swal.fire({
					title: 'Success!',
					icon: 'success',
					text: 'This product is now available.'
				})
				fetchData()
			}
		})
	}
	const activateToggle = (productId) => {
		fetch(`http://localhost:4000/products/${ productId }/activate`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('accessToken')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			if(data === true) {
				Swal.fire({
					title: '',
					icon: 'success',
					text: 'This product is now unavailable.'
				})
				fetchData()
			}else {
				Swal.fire({
					title: 'Success!',
					icon: 'success',
					text: 'This product is now available.'
				})
				fetchData()
			}
		})
	}

	return(
		<>
		<div className='text-center'>

			{isActive  ?
				<Button variant="danger" size="sm" onClick={() => archiveToggle(product)}>Disable</Button>

				:

				<Button variant="success" size="sm" onClick={() => activateToggle(product)}>Enable</Button>

			}
			</div>
			
		</>
		)
}