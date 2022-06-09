import Product from '../components/Product';
import Title from '../components/Title';
import {ProductConsumer} from '../context';
import Modal from '../components/Modal';

export default function ProductCatalog() {
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

		)
}
















