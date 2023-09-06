import { useState } from "react";

const ArrayofObject = () => {
  const [bug, setbug] = useState([{
    id: 1, title: "Bug 1", fixed: false
    
  }, {id: 2, title: "Bug 2", fixed: false}]);
  const handleClick = () => {
    
  };
  return (
    <>
      {bug}on onClick={handleClick}>Click</button>
    </>
  );
};

export default ArrayofObject;
