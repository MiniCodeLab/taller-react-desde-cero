// http://localhost:3000/heroes/superman
// Un parámetro dinámico de la URL se llama URL PARAM
// http://localhost:3000/heroes/:heroSlug

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteHeroById, getHeroBySlug, Hero } from '../data/heroes';

const HeroPage = () => {
  const navigate = useNavigate();
  const { heroSlug } = useParams();

  const [hero, setHero] = useState<Hero | null>(null);

  useEffect(() => {
    if (heroSlug) {
      getHeroBySlug(heroSlug).then((hero) => {
        if (hero) {
          setHero(hero);
        }
      });
    }
  }, [heroSlug]);

  const handleDeleteHero = (id: number) => {
    deleteHeroById(id).then(() => {
      navigate('/');
    });
  };

  return (
    <>
      <h3>Hero Profile ✨</h3>

      {hero ? (
        <div>
          <p>
            {hero.name} - {hero.age} años
          </p>
          <button onClick={() => handleDeleteHero(hero.id)}>
            Borrar super
          </button>
        </div>
      ) : (
        <p>Este héroe no está disponible 🚔</p>
      )}
    </>
  );
};

export default HeroPage;
