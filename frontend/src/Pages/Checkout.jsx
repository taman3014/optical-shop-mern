import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "COD",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleOrder = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\nName: ${formData.name}\nPayment: ${formData.payment}`);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleOrder} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select name="payment" value={formData.payment} onChange={handleChange}>
          <option value="COD">Cash on Delivery</option>
          <option value="Online">Online Payment</option>
        </select>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;