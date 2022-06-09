import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import {BackButton} from './Button';
  


export default function Details(){
    return(
        <ProductConsumer>
            {value =>{
                const {id, name, img, price,  description, manufacturer, inCart} = value.detailProduct;
            
            return (
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-brand">
                            <h1>{name}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <img src ={img} className="img-fluid" alt={name} />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h2>{name}</h2>
                            <h5>
                                Manufactured by: <span className='text-uppercase text-muted mt-3 mb-2'>{manufacturer}
                                </span>
                            </h5>
                            <h5 className='text-brand'>
                                <strong>Price: <span>₱</span>
                                {price}
                                </strong>
                            </h5>
                            <h5>
                                <p className="font-weight-bold mt-3 mb-0">About this Item:
                                </p>
                                <p className="text-muted lead">{description}</p>
                                <div>
                                    <Link to='/products'>
                                        <BackButton>
                                            Back to Products
                                        </BackButton>
                                    </Link>
                                        <BackButton cart disabled={inCart ? true:false} onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart ? "inCart" :"Add to Cart" }
                                        </BackButton>
                                </div>
                            </h5>
                        </div>
                    </div>
                </div>
            );
            }
        }
        </ProductConsumer>
    )
    
}