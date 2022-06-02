import { Card, CardGroup, Button, Row, Col } from "react-bootstrap";
import styled from 'styled-components';

export default function Product({productProp}){
  const {id,name, description, price, img} = productProp;
  
  return(

    <>
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
  </>
  )
} const ProductWrapper =styled.div``;