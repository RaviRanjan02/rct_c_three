import React, { useEffect, useState } from "react";
import Product from "../Products/Product/Product";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productItems = async () => {
      fetch("http://localhost:8080/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    };
    productItems();
  }, []);

  return (
    <div>
      {products.map((el)=>{
        <div>
          <Product key={el.id} name={el.name} des={el.name}/>
        </div>
      })}
    </div>
  );
};

export default Products;
