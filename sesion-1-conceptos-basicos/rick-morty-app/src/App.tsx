// Hola MiniCoder! Te dejamos aquí el reto de refactorización del código:
// - Debes conseguir que el archivo App.tsx quede lo más limpio posible
// - Esto lo conseguiremos sacando la request a la API con useEffect y el useState a un componente CharacterList
// - Ese componente devolverá en su return la lista mapeada que contiene los CharacterCard
// En la guía de la web tienes los ejemplos de esto: https://www.minicodelab.dev/feed/react-0-parte-2
// Y el video del taller en Youtube para repasar: https://youtu.be/iXZYPN3Nilc
import React from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard';
import { ApiResponse, Character } from './types';

// Mock = informacion falsa para desarrollar
// const charactersMock: Character[] = [
//   {
//     id: 1,
//     name: 'Rick Sanchez',
//     status: 'Alive',
//   },
//   {
//     id: 2,
//     name: 'Morty Smith',
//     status: 'Alive',
//   },
// ];

// useState & useEffect
const App = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  React.useEffect(() => {
    // IIFE
    (async () => {
      const charactersResponse = (await fetch(
        'https://rickandmortyapi.com/api/character/'
      ).then((res) => res.json())) as ApiResponse;

      console.log({ charactersResponse });
      // Seteo en el state los personajes de la API cuando la request termine
      setCharacters(charactersResponse.results);
    })();

    // Con el [] useEffect solo se ejecuta cuando el componente ha montado por primera vez
  }, []);

  console.log('Pintando componente App');
  console.log({ characters });

  return (
    <div className="App">
      <h1>MiniCodeLab Rick&Morty</h1>

      {/* Esto ya no lo usaremos en nuestro código final: */}
      {/* <button
        onClick={() => {
          setCharacters(charactersMock);
        }}
      >
        Cargar personajes
      </button> */}

      <ul className="character-list">
        {characters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </ul>
    </div>
  );
};

export default App;
