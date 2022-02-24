import { useCallback, useEffect, useMemo, useState } from 'react';

const BasicUseCallback: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // useCallback almacena la función que definimos siempre que cambie el contenido
  // del array de dependencias
  const resetCount = useCallback(() => {
    console.log('Count vale', count);

    setCount(0);
  }, []);

  // const resetCountNoCb = () => setCount(0);

  useEffect(() => {
    console.log('Lanzando el efecto!');
  }, [resetCount]);
  // }, [resetCountNoCb]);

  return (
    <div>
      <h2>Cuenta useCallback</h2>

      <p>La cuenta es: {count}</p>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Sumar
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Restar
      </button>

      <button onClick={resetCount}>Resetear</button>
    </div>
  );
};

export default BasicUseCallback;
