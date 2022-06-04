// import { Card, CardGroup, Button, Row, Col } from "react-bootstrap";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import FontAwesomeIcon from 'react-dom';
import { ProductConsumer } from '../context';
import  '../Products.css';
// import React, {Component} from "react";

export default function Product({productProp}){
  const {id, name, img, price, inCart} = productProp;
  
  return(

    <>
    <div>
   <ProdWrapper className='main_content col-12'>
         {/* <h1>hello from product page</h1> */}
        <div className='card'>
        <button className='cart-btn' disabled={inCart ? true : false} onClick={()=>{
              console.log('Added to the cart');
            }}>
            {inCart ? (<p className='text-capitalize mb-0' disabled> {" "} in Cart </p>)
            :(
               <i className="fa fa-cart-plus" />
            )}
        </button>
          <div className='container p-4' onClick={() => console.log("You clicked me")}>
            
            <Link to="/details">
              <img src={img} alt={name} className='card-img-top'/>
            </Link>
            
          
            
          </div>
          
          
          <div className="card-footer d-flex justify-content-between">
            <p className='prod-name mb-0'><strong>{name}</strong></p>
            <h5 className='text-brand mb-0'>
             <span className="mr-1">₱</span> {price}
            </h5>
          </div>
        </div>
    </ProdWrapper>
    </div>

    {/* <Card className="">
    <Card.Body>
      <Card.Title>{ name } </Card.Title>

      <Card.Subtitle>Description:</Card.Subtitle>
      <Card.Text> { description } </Card.Text>

      <Card.Subtitle>Price:</Card.Subtitle>
      <Card.Text>Php  {(price)} </Card.Text> */}

      {/* <Button variant="primary" as={ Link } to={`/courses/${_id}`}>Details</Button> */}
    {/*   <Button variant="primary">Details</Button>
    </Card.Body>
  </Card> */}


{/*  
 <CardGroup className=""> 
  <Col xs={12} md={4} lg={4}>
  
  <Card className='text-justify mx-3'>
    <Card.Img variant="top" className='' src={img} />
    <Card.Body>
      <Card.Title> {name }</Card.Title>
      <Card.Text>
      </Card.Text>
      <Card.Subtitle>Price:</Card.Subtitle>
      <Card.Text>Php  {(price)} </Card.Text>
    </Card.Body>
    <Button variant="primary">Details</Button>
 </Card>
 </Col>  
 </CardGroup> 
 */}



  </>
  )
}
const ProdWrapper =styled.div`
.card{
  border-color: transparent;
  transition: all 1s linear;
  background-color: black;
}
.card-footer{
  background: transparent;
  border-top: transparent;
  transition: all 1s linear;
}
&:hover{
  .card{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
  }
  .card-footer{
    background:black;
  }

  }
  .container{
    position: relative; 
    overflow:hidden;
  }
  .card-img-top{
    transition:all 1s linear;
  }
  .container:hover .card-img-top{
    transform:scale(1.2);
  }
  .text-capitalize{
    font-size:14px;
    color:red;

  }
  .prod-name {
    color:beige;
    font-family: "Roboto", sans-serif;

  }
  }


`;