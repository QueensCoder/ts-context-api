import React from "react";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <>
      <Counter incrementStep={1} decrementStep={1} />
    </>
  );
};

export default App;
