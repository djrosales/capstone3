
import { useState, useEffect } from 'react';
import { Card,CardGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 


import Product from '../components/Product';
import Title from '../Title';
import data from '../components/data';
import {storeProducts} from '../components/data';
import {ProductConsumer} from '../context';

export default function CourseCard({courseProp}) {

/* 	const { _id, name, description, price } = courseProp;
 */
   /*  const state={
        products:storeProducts
    }; */
    const products =data.map(product =>{
      return <Product productProp={product}/>;
    })

	return(
        <>
         <div className='py-2'>
            <Title prodName="our " label="products"/>
            {/* <div className='row'>
            <ProductConsumer>
                 {value => {
                    return value
                }} 
            </ProductConsumer>
            </div> */}
        </div>
        {/* <Product productProp={storeProducts[0]}/>  */}
        {products}
        
       

       {/*  
        <CardGroup>
  <Card className='mx-3'>
    <Card.Img variant="top" className='w-500' src="../img/cafe royal.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
  <Card className='mx-3'>
    <Card.Img variant="top" src="/img/cameron beer.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='mx-3'>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='mx-3'>
    <Card.Img variant="top" src="holder.js/500px500" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
<br/> <br/>
<CardGroup>
  <Card className='mx-3'>
    <Card.Img variant="top" src="/img/cafe royal.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='mx-3'>
    <Card.Img variant="top" src="/img/cameron beer.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='mx-3'>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='mx-3'>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup> */}
        </>

		/* <Card className="">
			<Card.Body>
				<Card.Title>cxc </Card.Title>

				<Card.Subtitle>Description:</Card.Subtitle>
				<Card.Text>fd</Card.Text>

				<Card.Subtitle>Price:</Card.Subtitle>
				<Card.Text>Php </Card.Text>

			
				<Button variant="primary">Details</Button>

				
				
				
			</Card.Body>
		</Card>
 */


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















