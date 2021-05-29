import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/action/cartAction";
import SelectedProduct from "../SelectedProduct/SelectedProduct";

const Cart = (props) => {
  const { cart, removeFromCart, key } = props;
  const allProducts = useSelector((state) => state.products);
  const [cartPro, setCartPro] = useState([]);

  let SelectedPro;

  if (cart.length !== 0) {
    SelectedPro = allProducts.find((pro) => pro.id === cart[cart.length - 1]);
  }

  useEffect(() => {
    //////
    if (SelectedPro) {
      setCartPro([...cartPro, SelectedPro]);
    }
  }, [SelectedPro]);

  console.log(cartPro);
  ////////////////
  // const deletes = (id) => {
  //   console.log(id);
  //   fetch(`http://localhost:3000/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log("deleted successfully");
  //     });
  // };
  ////////////////
  return (
    <div>
      {cartPro.length !== 0 && (
        <div className="row">
          {cartPro.map((pro) => (
            <div className="col-sm-3">
              <div
                style={{
                  border: "1px solid gray",
                  margin: "5px 0px",
                }}
              >
                <img src={pro.img} alt="" style={{ width: "100%" }} />
                <small>$ {pro.price}</small> <br />
                <button
                  onClick={() => {
                    removeFromCart(pro.id);
                  }}
                  className="btn btn-danger"
                >
                  x
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
