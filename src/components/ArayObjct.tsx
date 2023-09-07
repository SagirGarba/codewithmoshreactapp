import { useState } from "react";
import produce from "immer";

const ArayObjct = () => {
  const [bug, setBug] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleClick = () => {
    // setBug(bug.map((bug) => (bug.id == 1 ? { ...bug, fixed: true } : bug)));
    setBug(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id == 1);
        if (bug) bug.fixed = true;
      })
    );
  };
  return (
    <>
      {bug.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "FIXED" : "NEW"}
        </p>
      ))}
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default ArayObjct;
