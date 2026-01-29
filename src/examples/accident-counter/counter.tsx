import { Card } from '$/common/components/card';
import { useState, type ReactElement, type FormEvent, type ComponentPropsWithoutRef } from 'react';
import { Button } from '$/common/components/button';
import type { SubmitHandler } from '$/examples/utility-belt';

type CounterControlsProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

interface CounterFormProps extends ComponentPropsWithoutRef<'form'> {
  layout?: 'horizontal' | 'vertical';
  onSubmit: SubmitHandler;
}

const CounterControls = ({ setCount }: CounterControlsProps): ReactElement => {
  return (
    <div className="flex gap-2">
      <Button onClick={() => setCount((prev) => prev - 1)}>➖ Decrement</Button>
      <Button onClick={() => setCount(0)}>🔁 Reset</Button>
      <Button onClick={() => setCount((prev) => prev + 1)}>➕ Increment</Button>
    </div>
  );
};

const CounterForm = ({ onSubmit }: CounterFormProps): ReactElement => {
  const [draftCount, setDraftCount] = useState<number>(0);

  return (
    <form className="flex items-center gap-2" onSubmit={onSubmit}>
      <input
        className="ring-primary-600 focus:border-primary-800 rounded border border-slate-500 px-4 py-2 outline-none focus:ring-2"
        type="number"
        name="count"
        value={draftCount}
        onChange={(e) => setDraftCount(Number(e.target.value))}
      />
      <Button type="submit">Update Counter</Button>
    </form>
  );
};

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <CounterControls setCount={setCount} />
      <CounterForm
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const newCount = e.currentTarget.elements.namedItem('count') as HTMLInputElement;
          setCount(Number(newCount.value));
        }}
      />
    </Card>
  );
};
