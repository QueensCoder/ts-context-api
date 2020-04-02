import React, { createContext, useReducer } from "react";
import reducer, { increment, decrement } from "../reducer/counter";

type ContextProps = {};
type CountContextProviderType = (props: Object) => React.FC;

export const CountContext = createContext<Partial<ContextProps>>({});

const CountContextProvider = (props: React.FC) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <CountContext.Provider value={{ state, dispatch, increment, decrement }}>
      {props.children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;
