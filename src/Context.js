import React, { useState, createContext } from "react";

export const NameContext = createContext();

export const NameProvider = (props) => {
  const [name, setName] = useState("State");
  return (
    <NameContext.Provider value="Global State">
      {props.children}
    </NameContext.Provider>
  );
};
