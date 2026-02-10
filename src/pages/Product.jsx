import React from "react";
import { Link } from "react-router-dom";
const PRODUCTS = [
  { id: "p1", title: "product- 1 " },
  { id: "p2", title: "product- 2 " },
  { id: "p3", title: "product- 3 " },
];
function Product() {
  return (
    <main>
      <div>Product</div>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
        <li></li>
      </ul>
    </main>
  );
}

export default Product;
