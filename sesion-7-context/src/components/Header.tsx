import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`header header-${theme}`}>
      <nav className={`header-nav header-nav-${theme}`}>
        <Link to="/">
          <img
            alt="logo"
            src="https://www.minicodelab.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flonglogo.08a70b46.png&w=256&q=75"
            width={180}
          />
        </Link>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <div className="header-content">
        <ThemeSwitcher />

        <div className="header-search">
          <input name="filter-posts" type="search" placeholder="Search posts" />
          <button onClick={() => null}>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
