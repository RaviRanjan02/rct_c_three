import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = ({
 key, name,des}) => {
  
 

  return (
    <div data-cy={`product-${key}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{des}</h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};

export default Product;
