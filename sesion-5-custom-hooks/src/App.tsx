import './App.css';
import MiniCodeCounter from './components/MiniCodeCounter';
import MiniCodeDebounce from './components/MiniCodeDebounce';
import MiniCodeTabManager from './components/MiniCodeTabManager';

function App() {
  return (
    <div className="App">
      <MiniCodeTabManager
        withUnset
        tabs={[
          {
            content: MiniCodeCounter,
            slug: 'minicodecounter',
            title: 'Counter',
          },
          {
            content: MiniCodeDebounce,
            slug: 'minicodedebounce',
            title: 'Debounce',
          },
        ]}
      />
    </div>
  );
}

export default App;
