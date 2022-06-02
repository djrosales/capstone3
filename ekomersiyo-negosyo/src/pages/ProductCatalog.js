import Product from '../components/Product';
import Title from '../Title';
import data from '../components/data';


export default function CourseCard({courseProp}) {

    const products =data.map(product =>{
      return <Product productProp={product}/>;
    })

	return(
        <>
         <div className='py-2'>
            <Title prodName="our " label="products"/>
        </div>
        {products}
      </>


		)
}
//



















