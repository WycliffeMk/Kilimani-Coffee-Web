import React from "react";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Our Menu
      </h1>
      <div className="flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img="../images/cappussino.png" title="Cappussino" />
        <MenuCard img="../images/Americano.jpeg" title="Americano" />
        <MenuCard img="../images/doppio.jpeg" title="Doppio" />
        <MenuCard img="../images/Expresso.jpeg" title="Expresso" />
        <MenuCard img="../images/Latte.jpeg" title="Latte" />
        <MenuCard img="../images/mocaccino.jpeg" title="Mocaccino" />
      </div>
    </div>
  );
};

export default Menu;
