import React, { useState, createContext } from "react";

export const NameContext = createContext();

export const NameProvider = (props) => {
  const [name, setName] = useState([
    {
      firstName: "Ahsan",
      lastName: "Shakeel",
    },
  ]);
  return (
    <NameContext.Provider value={[name, setName]}>
      {props.children}
    </NameContext.Provider>
  );
};
