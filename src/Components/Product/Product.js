import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props);
  const { pd, addToCart } = props;
  /////////////
  // const addToCart = (pd) => {
  //   console.log(pd);

  // };
  ////////////
  return (
    <div className=" col-sm-6 col-md-4 ">
      <div style={{ border: "1px solid gray", margin: "15px 0px" }}>
        <img src={pd.img} alt="" style={{ width: "100%" }} />
        <div className="product-details">
          <h5>
            {" "}
            <small>{pd.name}</small>{" "}
            <small style={{ color: "gray", padding: "0px 5px" }}>
              {pd.tex}
            </small>
            <big style={{ float: "right", color: "#ff5201" }}>{pd.price}</big>
          </h5>

          <button className="btn btn-success" onClick={() => addToCart(pd.id)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
