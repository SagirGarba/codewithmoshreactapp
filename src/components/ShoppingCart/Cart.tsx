interface props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: props) => {
  return (
    <>
      <p>Cart</p>
      <u>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </u>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
