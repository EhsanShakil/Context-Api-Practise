import React, { useContext } from "react";
import Child from "./Child";
import { NameContext } from "./Context";

const Parent = () => {
  const value = useContext(NameContext);
  return (
    <div>
      <h1>Parent Component {value}</h1>
      <Child />
    </div>
  );
};

export default Parent;
