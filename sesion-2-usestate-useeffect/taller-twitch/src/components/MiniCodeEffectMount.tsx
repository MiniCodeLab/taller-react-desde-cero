import { useEffect, useState } from 'react';

const MiniCodeEffectMount: React.FC = () => {
  const [myName, setMyName] = useState<string>('David Bowie');

  // Ocurre siempre cuando el componente se monta
  useEffect(() => {
    // console.log('El componente se ha montado!');

    // Se lanza tantas veces como escribamos en el input
    setTimeout(() => {
      console.log('Cambiando a ziggy');
      setMyName('Ziggy Stardust');
    }, 2000);
    // });
  }, []);

  // Al pasar el state por param, no hace falta llevarlo al array de deps
  function sayHello(name: string): void {
    console.log(name);
  }

  // También se lanza cuando myName cambie
  useEffect(() => {
    // console.log('Ha cambiado myName:', myName);

    sayHello(myName);
  }, [myName]);

  return (
    <div>
      <h4>{myName}</h4>

      <input
        type="text"
        value={myName}
        onChange={(e) => setMyName(e.target.value)}
      />
    </div>
  );
};

export default MiniCodeEffectMount;
