import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>MiniCodeLab - React Router</h1>

      <nav className="nav">
        <NavLink to="/">Ir a Home</NavLink>
        <NavLink to="/heroes">Ver héroes</NavLink>
      </nav>

      <div>
        {/* Renderiza las rutas hijas escogidas por Routes */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
