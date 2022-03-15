import './App.css';
import Header from './components/Header';
import { ThemeContextProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Header />
      </div>
    </ThemeContextProvider>
  );
};

export default App;
