import React, { useReducer, useContext } from "react";
import reducer, { increment, decrement } from "../reducer/counter";
import { useCount } from "../context/counter";

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

  const consumedContext = useCount();
  // first 4 logs work
  console.log(consumedContext.dispatch);
  console.log(consumedContext.state);
  console.log(consumedContext.increment);
  console.log(consumedContext.decrement);

  //  does not work linter says Object is possibly 'undefined'
  console.log(consumedContext.state.count);

  return (
    <div>
      hi
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
