import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props);
  const { product, addToCart } = props;
  /////////////

  ////////////
  return (
    <div className=" col-sm-4">
      <div style={{ border: "1px solid gray", margin: "15px 0px" }}>
        <img src={product.img} alt="" style={{ width: "100%" }} />
        <div className="product-details">
          <h5>
            {" "}
            <small>{product.name}</small>{" "}
            <small style={{ color: "gray", padding: "0px 10px" }}>
              {product.tex}
            </small>
            <big style={{ float: "right", color: "#ff5201" }}>
              {product.price}
            </big>
          </h5>

          <button
            className="btn btn-success"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
