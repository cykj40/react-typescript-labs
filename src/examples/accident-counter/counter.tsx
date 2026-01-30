import { Card } from '$/common/components/card';
import { useReducer, type ReactElement, type FormEvent, type Dispatch } from 'react';
import { Button } from '$/common/components/button';
import { counterReducer, type CounterAction } from './counter-reducer';

type CounterControlsProps = {
  dispatch: Dispatch<CounterAction>;
};

type CounterFormProps = {
  draftCount: number;
  dispatch: Dispatch<CounterAction>;
};

const CounterControls = ({ dispatch }: CounterControlsProps): ReactElement => {
  return (
    <div className="flex gap-2">
      <Button onClick={() => dispatch({ type: 'decrement', payload: 0 })}>➖ Decrement</Button>
      <Button onClick={() => dispatch({ type: 'setCount', payload: 0 })}>🔁 Reset</Button>
      <Button onClick={() => dispatch({ type: 'increment', payload: 0 })}>➕ Increment</Button>
    </div>
  );
};

const CounterForm = ({ draftCount, dispatch }: CounterFormProps): ReactElement => {
  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.currentTarget.elements.namedItem('count') as HTMLInputElement;
        dispatch({ type: 'setCount', payload: Number(input.value) });
      }}
    >
      <input
        className="ring-primary-600 focus:border-primary-800 rounded border border-slate-500 px-4 py-2 outline-none focus:ring-2"
        type="number"
        name="count"
        value={draftCount}
        onChange={(e) => dispatch({ type: 'setCount', payload: Number(e.target.value) })}
      />
      <Button type="submit">Update Counter</Button>
    </form>
  );
};

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0, draftCount: 0 });

  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{state.count}</p>
      <CounterControls dispatch={dispatch} />
      <CounterForm draftCount={state.draftCount} dispatch={dispatch} />
    </Card>
  );
};
