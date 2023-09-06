import { useState } from "react";

const UpdatingArray = () => {
  const [tags, setTags] = useState(["Happy", "Joy"]);
  const handleClick = () => {
    //To add something to the array
    setTags([...tags, "Exciting"]);

    //toFilter
    setTags(tags.filter((tag) => tag !== "Happy"));

    //To Update
    setTags(tags.map((tag) => (tag == "Happy" ? "Happiness" : "tag")));
  };
  return (
    <>
      {tags}
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default UpdatingArray;
