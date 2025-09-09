import React from "react";
import { useParams } from "react-router-dom";

const dummyProducts = [
  { _id: 1, name: "Stylish Frame", price: 999, image: "/images/frame1.jpg", description: "A lightweight stylish frame suitable for all." },
  { _id: 2, name: "Sunglasses", price: 1299, image: "/images/sun1.jpg", description: "UV protected sunglasses with premium quality." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p._id.toString() === id);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} style={{ width: "250px" }} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;