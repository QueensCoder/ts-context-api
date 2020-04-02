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

type incrementType = (incrementStep: number) => Actions;
type decrementType = (decrementStep: number) => Actions;
type reducerType = (state: State, action: Actions) => State;
