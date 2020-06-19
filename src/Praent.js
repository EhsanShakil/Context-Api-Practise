import React, { useContext } from "react";
import Child from "./Child";
import { NameContext } from "./Context";

const Parent = () => {
  const [name, setName] = useContext(NameContext);
  return (
    <div>
      <h1>Parent Component</h1>
      {name.map((name) => (
        <li>
          {name.firstName} {name.lastName}
        </li>
      ))}
      <Child />
    </div>
  );
};

export default Parent;
