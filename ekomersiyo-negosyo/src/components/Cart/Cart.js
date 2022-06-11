import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';




 export default function Cart (){
    return(
        <section>
            <ProductConsumer>
                {value =>{
                    const {cart} = value;
                    if(cart.length>0){
                        return(
                            <>
                            <Title prodName="your " label="cart"  />
                            <CartColumns />
                            <CartList value={value}/>
                            <CartTotals value={value} />
                            </>
                        );
                    }
                    else{
                        return <EmptyCart />;
                    }
                }}
            </ProductConsumer>
            
        
        </section>
        
    )
} 