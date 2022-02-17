import { useRef, useState } from 'react';
import '../App.css';

const MiniCodeUseRefCss = () => {
  const [classColor, setClassColor] = useState('box');
  const colorRef = useRef<HTMLDivElement>(null);

  const changeColorState = () => {
    setClassColor(classColor === 'box' ? 'box-modify' : 'box');
  };

  const changeColorRef = () => {
    if (colorRef.current) {
      const newClass =
        colorRef.current.className === 'box' ? 'box-modify' : 'box';

      colorRef.current.className = newClass;
    }
  };

  console.log('Renderizando MiniCodeUseRefCss');

  return (
    <>
      <div className={classColor}>I´m in a Box STATE</div>
      <button onClick={changeColorState}>Modify color REF</button>

      <div className="box" ref={colorRef}>
        I´m in a Box REF
      </div>
      <button onClick={changeColorRef}>Modify color REF</button>
    </>
  );
};

export default MiniCodeUseRefCss;
