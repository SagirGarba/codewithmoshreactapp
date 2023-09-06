import React, { useState } from "react";

const UpdatingObject = () => {
  const [drinks, setDrinks] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrinks({ ...drinks, price: 6 });
  };

  return (
    <>
      {drinks.price};<button onClick={handleClick}>Click</button>;
    </>
  );
};
export default UpdatingObject;
