import React from "react";
import "./App.css";

function ProductCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Product List</h1>

      <ProductCard
        name="Laptop"
        price="55000"
        description="High performance laptop"
      />

      <ProductCard
        name="Phone"
        price="25000"
        description="Latest smartphone"
      />

      <ProductCard
        name="Headphones"
        price="3000"
        description="Noise cancelling headphones"
      />
    </div>
  );
}

export default App; 