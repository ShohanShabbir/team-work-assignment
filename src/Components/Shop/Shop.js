import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action/cartAction";
import Product from "../Product/Product";
import SelectedProduct from "../SelectedProduct/SelectedProduct";

const Shop = (props) => {
  console.log(props);
  const { products } = props;
  //////////
  const [selcProduct, setSelcProduct] = useState({});

  const addToCart = (pd) => {
    console.log(pd);
    setSelcProduct(pd);
  };
  //////////
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            {products.map((pd) => (
              <Product product={pd} key={pd.id} addToCart={addToCart}></Product>
            ))}
          </div>
        </div>
        <div className="col-sm-4">
          <SelectedProduct selcProduct={selcProduct}></SelectedProduct>
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
