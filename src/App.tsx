// import ListGroup from "./components/ListGroup";

import Button from "./components/Button";

// import Alert from "./components/Alert";

const App = () => {
  // let items = ["San Francisco", "London", "Lagos", "Mumbai", "Kano"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const handleClick = () => console.log("clicked");
  return (
    <Button children={"My button"} onClick={handleClick} color={"danger"} />

    // <Alert>
    //   Hello <span>World</span>
    // </Alert>

    // <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
  );
};

export default App;
