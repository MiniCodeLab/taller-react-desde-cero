import { useCallback, useState } from 'react';

type UseCountReturn = {
  count: number;
  add: () => void;
  substract: () => void;
};

function useCount(): UseCountReturn {
  const [count, setCount] = useState<number>(0);

  const add = useCallback(() => setCount((prevCount) => prevCount + 1), []);
  const substract = useCallback(
    () => setCount((prevCount) => prevCount - 1),
    []
  );

  return { count, add, substract };
}

export default useCount;
