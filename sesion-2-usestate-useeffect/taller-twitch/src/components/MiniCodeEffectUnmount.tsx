import { useState } from 'react';
import MessageComponent from './MessageComponent';

const MiniCodeEffectUnmount: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {visible ? <MessageComponent name="Thanos" /> : null}
      <p>Pulsa el botón para montar/desmontar un componente...</p>
      <button onClick={() => setVisible(!visible)}>I'm inevitable</button>
    </>
  );
};

export default MiniCodeEffectUnmount;
