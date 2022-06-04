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
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2>{name}</h2>
                            <h4>
                                manufactured by: <span className='text-uppercase text-muted mt-3 mb-2'>{manufacturer}
                                </span>
                            </h4>
                            <h4 className='text-brand'>
                                <strong>price:<span>₱</span>
                                {price}
                                </strong>
                            </h4>
                            <h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product:
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
                                        }}>
                                            {inCart ? "inCart" :"Add to Cart" }
                                        </BackButton>
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>
            );
            }
        }
        </ProductConsumer>
    )
    
}