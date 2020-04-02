import React, { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

type State = {
  count: number;
};

type CounterProps = {
  incrementStep?: number;
  decrementStep?: number;
};

// read only allows access to the variables but
// makes them immutable
type Increment = {
  readonly type: "INCREMENT";
  readonly incrementStep: number;
};

type Decrement = {
  readonly type: "DECREMENT";
  readonly decrementStep: number;
};

// union between two types
type Actions = Increment | Decrement;

// type reducerProps = (state: State, action: Actions) => State

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.incrementStep };
    case DECREMENT:
      return { count: state.count - action.decrementStep };
    default:
      return state;
  }
};

const Counter: React.FC<CounterProps> = ({
  incrementStep = 0,
  decrementStep = 0
}) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Actions>>(reducer, {
    count: 0
  });
  return (
    <div>
      <h1>Count {state.count}</h1>
      <div>
        <button>Increment {incrementStep}</button>
        <button>Decrement {decrementStep}</button>
      </div>
    </div>
  );
};

export default Counter;