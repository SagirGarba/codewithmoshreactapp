import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  color: boolean;
  toggle: () => void;
}
const Like = ({ toggle, color }: Props) => {
  return (
    <>
      {color ? (
        <AiTwotoneHeart color="ff6b81" size="100" onClick={toggle} />
      ) : (
        <>
          <AiOutlineHeart color="green" size="100" onClick={toggle} />
        </>
      )}
    </>
  );
};

export default Like;
