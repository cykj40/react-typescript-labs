import type { ComponentPropsWithoutRef, ReactElement } from 'react';

export const Button = ({ ...props }: ComponentPropsWithoutRef<'button'>): ReactElement => {
  return (
    <Button
      className="bg-primary-400 hover:bg-primary-500 rounded px-4 py-2 font-bold text-white"
      {...props}
    ></Button>
  );
};
