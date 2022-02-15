import { useState } from 'react';

type Avenger = {
  name: string;
  surname: string;
};

const MiniCodeComplexState: React.FC = () => {
  const [avenger, setAvenger] = useState<Avenger>({
    name: 'Thor',
    surname: 'Odinson',
  });

  const { name, surname } = avenger;

  return (
    <>
      <h2>
        Nombre: {name} | Apellido: {surname}
      </h2>

      <label htmlFor="name">Cambiar el nombre:</label>
      <input
        id="name"
        value={name}
        onChange={(e) => {
          const newName = e.target.value;

          setAvenger({
            ...avenger,
            name: newName,
          });
        }}
      />

      <br />

      <label htmlFor="surname">Cambiar el apellido:</label>
      <input
        id="surname"
        value={surname}
        onChange={(e) => {
          const newSurname = e.target.value;

          setAvenger({
            ...avenger,
            surname: newSurname,
          });
        }}
      />
    </>
  );
};

export default MiniCodeComplexState;
