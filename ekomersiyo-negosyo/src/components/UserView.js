import { useState, useEffect } from 'react';
import Product from './Product';


export default function UserView({storeProducts}) {
	
	const [ products, setProducts ] = useState([])
	useEffect(() => {

		const productsArr = storeProducts.map(product => {
			if(product.inCart === true) {
				return(

					<Product key={product._id} productProp={product}/>
					)
			}else {
				return null;
			}
		})
		setProducts(productsArr)
	}, [storeProducts])
	return(
		<>
			{ products }
		</>
		)
}