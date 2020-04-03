import React, {
  createContext,
  useReducer,
  ReactNodeArray,
  ReactNode
} from "react";
import reducer, { increment, decrement } from "../reducer/counter";

interface ContextProps {
  state: State;
  increment: (incrementStep: number) => void;
  decrement: (decrementStep: number) => void;
  dispatch: (action: Actions) => void;
}

interface ProviderProps {
  children: ReactNode | ReactNodeArray;
}

const initialState: State = { count: 0 };

export const CountContext = createContext<Partial<ContextProps>>({});

const CountContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Actions>>(
    reducer,
    initialState
  );
  return (
    <CountContext.Provider value={{ state, dispatch, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;
