// import ListGroup from "./components/ListGroup";

import Button from "./components/Button";
import AlertExercise from "./components/AlertExercise";
import { Children, useState } from "react";

// import Alert from "./components/Alert";

const App = () => {
  // let items = ["San Francisco", "London", "Lagos", "Mumbai", "Kano"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [visibility, showVisibility] = useState(false);

  const handleClick = () => showVisibility(true);

  const closeClick = () => showVisibility(false);
  return (
    <>
      {visibility && (
        <AlertExercise onClose={closeClick}>My button</AlertExercise>
      )}
      <Button children={"My button"} onClick={handleClick} color={"danger"} />

      {/* <Alert>
    Hello <span>World</span>
    </Alert>

    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
     */}
    </>
  );
};

export default App;
