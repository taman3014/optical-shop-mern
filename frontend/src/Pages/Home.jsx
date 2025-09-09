import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Optical Shop</h1>
      <p>Your one-stop solution for frames, lenses, and sunglasses.</p>
      <Link to="/products" className="btn">Shop Now</Link>
    </div>
  );
};

export default Home;

