// import ListGroup from "./components/ListGroup";
import "./App.css";
import ExpandApp from "./components/ExpandableText";
// import ShoppingCart from "./components/ShoppingCart";
// import UpdatingArray from "./UpdatingArray";
// import ArayObjct from "./components/ArayObjct";
// import NestedObjects from "./components/NestedObjects";
// import PureComponent from "./components/PureComponent";
// import Calendar from "./components/Calendar";
// import UpdatingObject from "./components/UpdatingObject";
// import UpdatingState from "./components/UpdatingState";

// import Button from "./components/Button";
// import Like from "./components/Like";
// import { useState } from "react";

// import AlertExercise from "./components/AlertExercise";
// import { Children, useState } from "react";

// import Alert from "./components/Alert";
// import NextClass from "./components/NextClass";
// import StateStructure from "./components/StateStructure";

const App = () => {
  //   let items = ["San Francisco", "London", "Lagos", "Mumbai", "Kano"];

  //   const handleSelectItem = (item: string) => {
  //     console.log(item);
  //   };

  // const [visibility, showVisibility] = useState(true);

  // const handleClick = () => showVisibility(true);

  // const closeClick = () => showVisibility(false);

  // const [color, setColor] = useState(true);

  // const onClick = () => {
  //   console.log("Clicked");
  //   setColor(!color);
  // };
  return (
    <>
      {/* {visibility && (
        <AlertExercise onClose={closeClick} onOpen={handleClick}>My button</AlertExercise>
      )} */}

      {/* <Button children={"My button"} color={"Primary"} /> 
      <Like color={color} toggle={onClick} /> */}

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

      {/* <NextClass /> */}

      {/* <StateStructure /> */}
      {/* <UpdatingObject /> */}
      {/* <NestedObjects /> */}
      {/* <UpdatingArray /> */}

      {/* <ArayObjct /> */}

      {/* <ShoppingCart /> */}

      {/* <UpdatingState /> */}
      <ExpandApp />
    </>
  );
};

export default App;
