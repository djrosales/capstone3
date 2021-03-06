import styled from 'styled-components';
import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { ProductConsumer } from '../context';
import  '../Products.css';
import PropTypes from 'prop-types';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';



export default function Product({productProp}){
  const {id, name, img, price, inCart} = productProp;
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  return(
    <>
    <div>
   <ProdWrapper className='main_content col-12'>
     
        <div className='card'>

        <ProductConsumer>
          {value => (
             <>
             <button className='cart-btn' disabled={inCart ? true : false} onClick={() => {
              if (user.accessToken !== null) {
                 value.addToCart(id);
                 value.openModal(id);
            }else if(user.isAdmin === true) {
              
              navigate('/adminPage');
              
            }
            else{
              Swal.fire('You need to sign up first.')
            
            }
                } }>
                  {inCart ? (<p className='text-capitalize mb-0' disabled> {" "} in Cart </p>)
                    : (
                      <i className="fa fa-cart-plus" />
                    )}
                </button>
                <div className='container p-4' onClick={() =>{
                  if (user.accessToken !== null) {
                  value.handleDetail(id);
                }else{
                  Swal.fire('You need to sign up first.')
                  navigate('/register')
                }
              }
                  }>

                    <Link to="/details">
                      <img src={img} alt={name} className='card-img-top' />
                    </Link>
                  </div>
                  </>
          )}
       
        </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className='prod-name mb-0'><strong>{name}</strong></p>
            <h5 className='text-brand mb-0'>
             <span className="mr-1">???</span> {price}
            </h5>
          </div>
         </div> 
    </ProdWrapper>
    </div>
  </>
  )
}
Product.propTypes ={
  productProp:PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
};


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