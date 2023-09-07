import { useState } from "react";
import Cart from "./Cart";
import NavBar from "./NavBar";

function ShoppingCart() {
  const [CartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  const handleClear = () => {
    setCartItems([]);
  };
  return (
    <>
      <NavBar cartItemsCount={CartItems.length} />
      <Cart cartItems={CartItems} onClear={handleClear} />
    </>
  );
}

export default ShoppingCart;
