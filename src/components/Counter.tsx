import React, { useReducer } from "react";
import reducer, { increment, decrement } from "../reducer/counter";

// start count at 0
const intialState: State = {
  count: 0
};

const Counter: React.FC<CounterProps> = ({
  incrementStep = 0,
  decrementStep = 0
}) => {
  // app still works without useReducer props being specificed
  const [state, dispatch] = useReducer<React.Reducer<State, Actions>>(
    reducer,
    intialState
  );
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
