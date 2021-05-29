import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/action/cartAction";

const Cart = (props) => {
  const { cart, removeFromCart } = props;
  console.log(props);

  console.log(props);
  return (
    <div>
      <ul>
        {cart.map((id) => (
          <li>{id}</li>
        ))}
      </ul>
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
