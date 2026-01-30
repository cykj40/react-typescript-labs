import { useState, useEffect } from 'react';

export const useRandomColor = () => {
  const [color, setColor] = useState<`rgb(${number}, ${number}, ${number})`>('rgb(255, 0, 0)');

  useEffect(() => {
    setColor(
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
    );
  }, [setColor]);

  return color;
};
