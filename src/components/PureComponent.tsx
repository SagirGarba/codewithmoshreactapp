let count = 0;

const PureComponent = () => {
  console.log("This message", count);

  count++;
  return <h1>Message {count}</h1>;
};

export default PureComponent;
