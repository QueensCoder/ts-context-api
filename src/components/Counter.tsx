import React, { useReducer } from "react";
import reducer, { increment, decrement } from "../reducer/counter";

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
        <button onClick={() => dispatch(increment(incrementStep))}>
          Increment {incrementStep}
        </button>
        <button onClick={() => dispatch(decrement(decrementStep))}>
          Decrement {decrementStep}
        </button>
      </div>
    </div>
  );
};

export default Counter;
