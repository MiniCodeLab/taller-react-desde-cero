import { useState } from 'react';

const MiniCodeInput: React.FC = () => {
  const [name, setName] = useState<string>('Alberto');

  return (
    <>
      <h2>Mi nombre es {name}</h2>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);

          // Se queda el último valor porque el render no es inmediato!
          setName(e.target.value.toUpperCase());

          // Después de dos segundos, manda este setState
          setTimeout(() => {
            setName(e.target.value.toUpperCase());
          }, 2000);
        }}
      />
    </>
  );
};

export default MiniCodeInput;
