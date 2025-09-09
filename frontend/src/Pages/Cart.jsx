import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  // Dummy cart items for now
  const [cartItems, setCartItems] = useState([
    { _id: 1, name: "Stylish Frame", price: 999, qty: 1, image: "/images/frame1.jpg" },
    { _id: 2, name: "Sunglasses", price: 1299, qty: 2, image: "/images/sun1.jpg" },
  ]);

  const handleQtyChange = (id, qty) => {
    setCartItems(cartItems.map(item =>
      item._id === id ? { ...item, qty: parseInt(qty) } : item
    ));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item._id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty. <Link to="/products">Shop now</Link></p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item._id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => handleQtyChange(item._id, e.target.value)}
                  />
                  <button onClick={() => handleRemove(item._id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>
            <Link to="/checkout" className="btn">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;