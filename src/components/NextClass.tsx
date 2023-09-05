import { useState } from "react";

const NextClass = () => {
  const [isVisible, setVisibility] = useState(false);
  let x = 0;
  const handleVisibility = () => {
    setVisibility(true);
    x++;
    console.log(x);
    console.log(isVisible);
  };
  return (
    <>
      <button onClick={handleVisibility}>Show</button>
    </>
  );
};

export default NextClass;
