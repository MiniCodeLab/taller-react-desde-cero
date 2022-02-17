import { useEffect, useRef, useState } from 'react';

const MiniCodeInterval = () => {
  const [toggle, setToggle] = useState(false);
  // Creo un ref para almacenar el intervalo
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    // Cuando activo el toggle POR PRIMERA VEZ
    // y NO TENGO INTERVALO guardado en intervalRef
    if (toggle && !intervalRef.current) {
      let time = 0;

      // Guardo el intervalo en intervalRef y por tanto,
      // ya no entra nunca más en el if
      intervalRef.current = setInterval(() => {
        time += 1000;

        console.log('Intervalo!', time);
        // Cuando time sea 30... puedo hacer una request
      }, 1000);
    }
  }, [toggle]);

  // Solamente LIMPIA el intervalo al desmontar el componente
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  console.log('Renderizando MiniCodeInterval!');

  return (
    <div>
      <h3>MiniCodeInterval</h3>

      <button onClick={() => setToggle(!toggle)}>Activar intervalo!</button>
    </div>
  );
};

export default MiniCodeInterval;
