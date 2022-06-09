import { useState, useEffect } from 'react';
import Product from './Product';


export default function UserView({storeProducts}) {

	const [ products, setProducts ] = useState([])

	//We write our .map inside the useEffect to render the rapid changes of the data ..
	useEffect(() => {

		const productsArr = storeProducts.map(product => {
			//Only render the active courses..
			if(product.isActive === true) {
				return(

					<Product key={product._id} productProp={product}/>
					)
			}else {
				return null;
			}
		})

		//set the courses state to the result of our map function, to bring our return course component outside of the scope of our useEffect where our return statement below can see.

		setProducts(productsArr)


	}, [storeProducts])


	return(
		<>
			{ products }
		</>
		)
}