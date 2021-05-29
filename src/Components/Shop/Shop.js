import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action/cartAction";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import SelectedProduct from "../SelectedProduct/SelectedProduct";

const Shop = (props) => {
  // console.log(props);
  const { products, addToCart } = props;
  //////////

  // const addToCart = (pd) => {
  //   console.log(pd);

  //   setSelcProduct(pd);
  //   // const sameProduct = pro.filter((prd) => prd.key === pd.key);
  //   // const count = sameProduct.length;
  //   //localStorage.setItem(pd.key, count);
  // };
  //////////
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            {products.map((pd) => (
              <Product pd={pd} key={pd.id} addToCart={addToCart}></Product>
            ))}
          </div>
        </div>
        <div className="col-sm-4">
          <SelectedProduct></SelectedProduct>
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
