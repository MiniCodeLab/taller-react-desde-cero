import { FormEvent, useEffect, useRef, useState } from 'react';

const MiniCodeUseRef: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>('Alberto');
  const [count, setCount] = useState<number>(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const nameInputValue = textInputRef.current?.value;

    if (nameInputValue) {
      setName(nameInputValue);

      if (textInputRef.current) {
        textInputRef.current.value = '';
      }
    }
  };

  const printValue = () => {
    const inputValue = textInputRef.current?.value;
    if (inputValue) setName(inputValue);

    console.log('Imprime nombre:', inputValue);
  };

  console.log('Renderizando componente MiniCodeUseRef');
  console.log('La referencia:', textInputRef);

  useEffect(() => {
    console.log('Se ha montado el componente, hacemos focus al input:');

    textInputRef.current?.focus();
  }, []);

  return (
    <div>
      <h3>Hola soy {name}</h3>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" ref={textInputRef} />
        {/* Este input number provoca rerenders al cambiar el state */}
        <input
          type="number"
          placeholder="name"
          value={count}
          onChange={(e) => {
            setCount(e.target.valueAsNumber);
          }}
        />

        <button type="submit">Mostrar</button>
      </form>
    </div>
  );
};

export default MiniCodeUseRef;
