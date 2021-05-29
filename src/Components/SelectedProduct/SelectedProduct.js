import React from "react";

const SelectedProduct = ({ selcProduct }) => {
  console.log(selcProduct);
  return (
    <div>
      <img src={selcProduct.img} alt="" className="w-50" />
      <h5>{selcProduct.price}</h5>
    </div>
  );
};

export default SelectedProduct;
