import React from "react";
import ProductCard from "../components/ProductCard";

const dummyProducts = [
  { _id: 1, name: "Stylish Frame", price: 999, image: "/images/frame1.jpg" },
  { _id: 2, name: "Sunglasses", price: 1299, image: "/images/sun1.jpg" },
];

const Products = () => {
  return (
    <div className="products">
      <h2>Shop Glasses</h2>
      <div className="product-list">
        {dummyProducts.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;