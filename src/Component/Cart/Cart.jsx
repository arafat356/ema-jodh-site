import React from 'react';
import './Cart.css';
const Cart = (props) => {
  //   console.log(props.cart);
  const { cart, name } = props;
  console.log(name);
  let total = 0;
  for (const photo of cart) {
    total = total + photo.price;
  }
  return (
    <div>
      <h2>Photo Oder List</h2>
      <h4>Number of Oder : {props.cart.length}</h4>
      <p>Total : {total}</p>
    </div>
  );
};

export default Cart;
