type State = {
  count: number;
  draftCount: number;
};

const initialState: State = {
  count: 0,
  draftCount: 0,
} satisfies State;

export interface CounterAction {
  type: 'increment' | 'decrement' | 'setCount';
  payload: number;
}

export interface IncrementAction extends CounterAction {
  type: 'increment';
}

export interface DecrementAction extends CounterAction {
  type: 'decrement';
}

export interface SetCountAction extends CounterAction {
  type: 'setCount';
  payload: number;
}

export const counterReducer = (state = initialState, action: CounterAction): State => {
  console.log({ action });
  const { count } = state;

  if (action.type === 'increment') {
    const newCount = count + 1;
    return { count: newCount, draftCount: newCount };
  }

  if (action.type === 'decrement') {
    const newCount = count - 1;
    return { count: newCount, draftCount: newCount };
  }

  if (action.type === 'setCount') {
    const newCount = Number(action.payload);
    return { count: newCount, draftCount: newCount };
  }

  return { ...state, count: action.payload };
};
