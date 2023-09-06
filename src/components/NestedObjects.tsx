import { useState } from "react";

function NestedObjects() {
  const [costumer, setCostumer] = useState({
    name: "Nigeria",
    address: {
      city: "San Francisco",
      ZipCode: 6753346,
    },
  });

  const handleClick = () => {
    setCostumer({
      ...costumer,
      address: { ...costumer.address, ZipCode: 98765 },
    });
  };
  return (
    <>
      {costumer.address.ZipCode}
      <button onClick={handleClick}>Click</button>;
    </>
  );
}

export default NestedObjects;
