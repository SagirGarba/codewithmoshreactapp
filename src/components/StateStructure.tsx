import { useState } from "react";

const StateStructure = () => {
  const [firstName, setFirstName] = useState("Sagir");
  const [lastName, setLastName] = useState("Garba");

  const fullName = firstName + " " + lastName;

  //   const [person, setPerson] = useState({
  //     firstName: "Sagir",
  //     lastName: "Garba",
  //   });

  return <>{fullName}</>;
};

export default StateStructure;
