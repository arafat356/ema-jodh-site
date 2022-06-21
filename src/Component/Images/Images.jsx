import React from 'react';
import './Images.css';
const Images = (props) => {
  console.log(props);
  const { name, img, id, price } = props.photos;
  return (
    <div className="photos">
      <img src={img} alt="" />
      <h4 className="name">*{name}*</h4>
      <p>ID : {id}</p>
      <h4>Price : ${price}</h4>
      <button
        onClick={() => props.handleAddToCart(props.photos)}
        className="button"
      >
        Add Photo
      </button>
    </div>
  );
};

export default Images;
