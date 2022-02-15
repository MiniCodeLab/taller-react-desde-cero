import { Character } from '../types';

type Props = {
  character: Character;
};

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <li>
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>

      <img src={character.image} alt={character.name} width={200} />
    </li>
  );
};

export default CharacterCard;
