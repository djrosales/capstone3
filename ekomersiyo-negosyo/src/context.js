/* import React from 'react';

const ProductContext = React.createContext();

export const ProductProvider = ProductContext.Provider;


 export default ProductContext;
const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer};
  */
 

//--------------------------
import React, {Component} from 'react';
import {storeProducts, detailProduct} from './components/data';

const ProductContext = React.createContext();

class ProductProvider extends Component{
    state={
        products: storeProducts,
        detailProduct: detailProduct
    }
    handleDetail = () =>{
        console.log('Hello from detail');
    }
    addToCart = ()=>{
        console.log('hello from add to cart');
    }
    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
            {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export{ProductProvider, ProductConsumer};