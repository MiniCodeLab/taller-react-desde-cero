import { useEffect, useState } from 'react';

function useDebounceString(value: string, timeout = 500): string {
  const [debouncedValue, setDebouncedValue] = useState<string>(value || '');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeout, value]);

  return debouncedValue;
}

export default useDebounceString;
