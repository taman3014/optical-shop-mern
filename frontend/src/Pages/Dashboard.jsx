import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <p>Welcome, Shop Owner! Manage your products and orders here.</p>

      <div className="dashboard-section">
        <h3>Products</h3>
        <button>Add New Product</button>
        <ul>
          <li>Stylish Frame - ₹999</li>
          <li>Sunglasses - ₹1299</li>
        </ul>
      </div>

      <div className="dashboard-section">
        <h3>Orders</h3>
        <ul>
          <li>Order #101 - Pending</li>
          <li>Order #102 - Delivered</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;