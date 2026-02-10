import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const param = useParams();

  return (
    <div>
      <h1>ProductPage</h1>
      <p>{param.id}</p>
    </div>
  );
};

export default ProductPage;
