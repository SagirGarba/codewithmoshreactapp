// import ListGroup from "./components/ListGroup";
import "./App.css";
// import Calendar from "./components/Calendar";

// import Button from "./components/Button";
import Like from "./components/Like";
import { useState } from "react";

// import AlertExercise from "./components/AlertExercise";
// import { Children, useState } from "react";

// import Alert from "./components/Alert";

const App = () => {
  //   let items = ["San Francisco", "London", "Lagos", "Mumbai", "Kano"];

  //   const handleSelectItem = (item: string) => {
  //     console.log(item);
  //   };

  //  const [visibility, showVisibility] = useState(false);

  // const handleClick = () => showVisibility(true);

  // const closeClick = () => showVisibility(false);

  const [color, setColor] = useState(true);

  const onClick = () => {
    console.log("Clicked");
    setColor(!color);
  };
  return (
    <>
      {/* {visibility && (
        <AlertExercise onClose={closeClick}>My button</AlertExercise>
      )} 

      <Button children={"My button"} color={"Primary"} /> */}
      <Like color={color} toggle={onClick} />

      {/* <Alert>
    Hello <span>World</span>



    </Alert>
     */}

      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Calendar /> */}
    </>
  );
};

export default App;
