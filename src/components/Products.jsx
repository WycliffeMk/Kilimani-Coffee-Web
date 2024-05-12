import React from "react";
import ProductCard from "../layouts/ProductCard";

const Product = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        Our Products
      </h1>

      <div className=" flex flex-col lg:flex-row gap-12 justify-center">
        <ProductCard img="../images/Nespresso.jpeg" title="Nespresso" />
        <ProductCard img="../images/AeroPress.jpeg" title="AeroPress" />
        <ProductCard img="../images/Chamax.jpeg" title="Chemex" />
      </div>
    </div>
  );
};

export default Product;
