const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment: incrementType = incrementStep => ({
  type: INCREMENT,
  incrementStep
});

export const decrement: decrementType = decrementStep => ({
  type: DECREMENT,
  decrementStep
});

const reducer: reducerType = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.incrementStep };
    case DECREMENT:
      return { count: state.count - action.decrementStep };
    default:
      return state;
  }
};

export default reducer;
