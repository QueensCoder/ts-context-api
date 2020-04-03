import React, {
  createContext,
  useReducer,
  ReactNodeArray,
  ReactNode
} from "react";
import reducer, { increment, decrement } from "../reducer/counter";
type ContextState = {
  count: number;
};

interface ProviderProps {
  children: ReactNode | ReactNodeArray;
}

interface ContextProps {
  // count: number;
  // increment: (incrementStep: number) => void;
  // decrement: (decrementStep: number) => void;
}

export const CountContext = createContext<ContextProps>({});

const CountContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <CountContext.Provider value={{ state, dispatch, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;
