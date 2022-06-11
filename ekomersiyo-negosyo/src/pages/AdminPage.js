import AdminView from '../components/AdminView';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';
import UserView from '../components/UserView';
// import storeProducts from '../components/data';




export default function AdminPage() {

	let storeProducts = [];
	const [allProducts, setProducts] = useState([])

	function getProducts() {
		const token = localStorage.getItem('accessToken');
			fetch('http://localhost:4000/products/all', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					//Storing all the data to our useState allProducts
					storeProducts = data;
					setProducts(data)
				})
	}

	useEffect(() => {
		getProducts();//1
	}, [])


	const { user } = useContext(UserContext);

	return (
		<>

			{(user.isAdmin === true) ?

				<AdminView storeProducts={allProducts} fetchData={getProducts} />//1

				:

				<UserView storeProducts={allProducts} /> 
			}

		</>


	)
}