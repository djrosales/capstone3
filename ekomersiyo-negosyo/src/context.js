import React from 'react';

const ProductContext = React.createContext();

export const ProductProvider = ProductContext.Provider;


export default ProductContext;
const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer};
//
 