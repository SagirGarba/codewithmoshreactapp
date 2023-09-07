import { useState } from "react";

const UpdatingState = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Ozil" } });

    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"].join(" ") });

    setCart({
      ...cart,
      items: [
        ...cart.items.map((item) =>
          item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
        ),
      ],
    });
  };

  return (
    <>
      {game.player.name};{pizza.toppings}
      {cart.items.map((item) => item.quantity)};
      <button onClick={handleClick}>Change</button>
    </>
  );
};

export default UpdatingState;
