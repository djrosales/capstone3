
import { useState, useEffect } from 'react';
import { Card,CardGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 


import Product from '../components/Product';
import Title from '../components/Title';
import {ProductConsumer} from '../context';
import Modal from '../components/Modal';

export default function ProductCatalog() {
   /*  const products =data.map(product =>{
      return <Product productProp={product}/>;
    }) */

	return(
        <>
         <div className='py-2'>
            <Title prodName="our " label="products"/>
             <div className='main_content'>
            <ProductConsumer>
                 {value => {
                    return value.products.map(product => {
                      return <Product key={product.id} productProp={product}/>;
                    })
                }} 
            </ProductConsumer>
            </div>
            <Modal /> 
        </div>
       

       
        </>

		


    //--------------

		)
}




/* CourseCard.propTypes = {
	
	courseProp: PropTypes.shape({
		
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})

}
 */















