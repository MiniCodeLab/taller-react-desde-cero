import { useState } from 'react';

const MiniCodeStateCallback: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);

  return (
    <>
      <h2>Total: {count}</h2>

      <input
        type="number"
        value={multiplier}
        min={1}
        onChange={(e) => {
          setMultiplier(e.target.valueAsNumber);
        }}
      />

      <br />

      <button
        onClick={() => {
          for (let i = 1; i <= multiplier; i++) {
            // Con el callback tenemos como argumento el estado anterior cambiado
            // inluso antes de que react haga un RERENDER
            setCount((prevCount) => {
              return prevCount + 1;
            });
          }
        }}
      >
        Sumar
      </button>
    </>
  );
};

export default MiniCodeStateCallback;
