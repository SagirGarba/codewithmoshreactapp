import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";

interface Props {
  handleClick: () => void;
}
const Like = ({ handleClick }: Props) => {
  const [color, setColor] = useState(false);

  return (
    <>
      {color ? (
        <FcLikePlaceholder color="ff6b81" size="100" onClick={handleClick} />
      ) : (
        <button onClick={handleClick} />
      )}
    </>
  );
};

export default Like;
