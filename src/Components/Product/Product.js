import React from 'react';

const Product = (props) => {
    const {addToCart, product} = props;
    return (
        <div style={{border: '1px solid tomato'}}>
            <h5>{product.name}</h5>
            <h4>{product.price}</h4>
            <h4>{product.tex}</h4>
            <button onClick={()=>addToCart(product.id)}>Add to cart</button>
        </div>
        
    );
};

export default Product;