import React, { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const increment: incrementProps = incrementStep => ({
  type: INCREMENT,
  incrementStep
});

const decrement: decrementProps = decrementStep => ({
  type: DECREMENT,
  decrementStep
});

const reducer: reducerProps = (state, action) => {
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
