import React, {
  createContext,
  useReducer,
  ReactNodeArray,
  ReactNode,
  FC,
  useContext,
  Reducer
} from "react";
import reducer, { increment, decrement } from "../reducer/counter";

interface ContextType {
  state: State;
  increment: (incrementStep: number) => Actions;
  decrement: (decrementStep: number) => Actions;
  dispatch: (action: Actions) => void;
}

// Provider is HOC and take in components as children
interface ProviderProps {
  children: ReactNode | ReactNodeArray;
}

//initialState starts count at 0
const initialState: State = { count: 0 };

// had to use partial or else empty obj causes error for making context
export const CountContext = createContext<Partial<ContextType>>({});

const CountContextProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<State, Actions>>(
    reducer,
    initialState
  );
  const value = { state, increment, decrement, dispatch };
  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);
export default CountContextProvider;
