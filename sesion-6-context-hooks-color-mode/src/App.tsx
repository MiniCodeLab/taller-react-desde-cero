import "./App.css";
import MiniCodeCard from "./components/MiniCodeCard";
import MiniCodeSwitch from "./components/MiniCodeSwitch";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <MiniCodeSwitch />
        <MiniCodeCard />
      </ThemeProvider>
      ,
    </div>
  );
}

export default App;
