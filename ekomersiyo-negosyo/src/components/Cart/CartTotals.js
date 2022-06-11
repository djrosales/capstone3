import React from 'react'
import {Link} from 'react-router-dom';


export default function CartTotals({value}) {
    const{cartSubtotal, cartTax, cartTotal,clearCart}=value;

  return (
      <>
         <div className='container'>
            <div className="row">
                <div className="col-10 mt-5 ml-sm-5 ml-md-auto col-sm-12 text-capitalize text-right" id="cartTotal">
                    <Link to='/products'>
                        <button className='btn btn-outline-danger text-uppercase mb-3 px-5' type="button" onClick={() =>clearCart()}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className='text-title'>subtotal : </span>
                        <strong>₱ {cartSubtotal}</strong>
                    </h5>
                    <h5>
                        <span className='text-title'>tax (5%) : </span>
                        <strong>₱ {cartTax}</strong>
                    </h5>

                    <h5>
                        <span className='text-title'>total : </span>
                        <strong>₱ {cartTotal}</strong>
                    </h5>


                </div>
            </div>
        </div>
      </>
   
  )
}
