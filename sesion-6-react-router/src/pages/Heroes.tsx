import { NavLink, Outlet } from 'react-router-dom';
import { heroes } from '../data/heroes';

const Heroes = () => {
  return (
    <>
      <h2>Heroes Page 🦸</h2>

      <div className="hero-links">
        {heroes.map((hero) => (
          <NavLink key={hero.id} to={`/heroes/${hero.slug}`}>
            {hero.name}
          </NavLink>
        ))}
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Heroes;
