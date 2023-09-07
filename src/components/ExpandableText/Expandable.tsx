import React, { useState } from "react";

interface props {
  children: string;
  maxChar?: number;
}

const Expandable = ({ children, maxChar = 100 }: props) => {
  const [isExpanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  if (children.length <= maxChar)
    return (
      <p>
        {children}
        <button onClick={handleClick}>{isExpanded ? "Less" : "More"}</button>
      </p>
    );

  const text = isExpanded ? children : children.substring(0, maxChar);

  return (
    <p>
      {text}...
      <button onClick={handleClick}>{isExpanded ? "Less" : "More"}</button>
    </p>
  );
};

export default Expandable;
