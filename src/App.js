import React from "react";
import Parent from "./Praent";
import { NameProvider } from "./Context";

function App() {
  return (
    <NameProvider>
      <div className="App">
        <h1>App Component</h1>
        <Parent />
      </div>
    </NameProvider>
  );
}

export default App;
