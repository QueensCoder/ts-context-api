import React from "react";
import Counter from "./components/Counter";
import CountContextProvider from "./context/counter";

const App: React.FC = () => {
  return (
    <>
      <CountContextProvider>
        <Counter incrementStep={1} decrementStep={1} />
      </CountContextProvider>
    </>
  );
};

export default App;
