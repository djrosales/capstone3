import AdminView from '../components/AdminView';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';
import UserView from '../components/UserView';


export default function AdminPage() {
	let storeProducts = [];
	const [allProducts, setProducts] = useState([])

	function getProducts() {
		const token = localStorage.getItem('accessToken');
			fetch('https://ekomersiyo-negosyo.herokuapp.com/products/all', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then(res => res.json())
				.then(data => {
					storeProducts = data;
					setProducts(data)
				})
	}

	useEffect(() => {
		getProducts();
	}, [])
	const { user } = useContext(UserContext);
	return (
		<>
			{(user.isAdmin === true) ?

				<AdminView storeProducts={allProducts} fetchData={getProducts} />
				:
				<UserView storeProducts={allProducts} /> 
			}

		</>
	)
}