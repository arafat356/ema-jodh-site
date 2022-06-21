import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Images from '../Images/Images';
import './Photos.css';
const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('./Photos.JSON')
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  /* button handle */
  const handleAddToCart = (photo) => {
    const newCart = [...cart, photo];
    setCart(newCart);
  };
  return (
    <div className="photots-container">
      <div className="photo-container">
        {photos.map((photo) => (
          <Images photos={photo} handleAddToCart={handleAddToCart}></Images>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Photos;
