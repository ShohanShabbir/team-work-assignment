import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/action/cartAction';
import Product from '../Product/Product';

const Shop = (props) => {
    console.log(props);
    const {products, addToCart} = props;
    return (
        <div>
            {
                products.map(pd => <Product 
                    product = {pd}
                    key = {pd.id}
                    addToCart = {addToCart}
                    ></Product>)
            }
        </div>
    );
};
 
const mapStateToProps = state =>{
     return {
         cart: state.cart,
         products: state.products
     }
}

const mapDispatchToProps ={
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);


export default connect(mapStateToProps, mapDispatchToProps)(Shop);