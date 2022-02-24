import './App.css';
import MiniCodeTabManager from './components/MiniCodeTabManager';
import MiniCodeUseCallback from './components/MiniCodeUseCallback';
import MiniCodeUseMemo from './components/MiniCodeUseMemo';

function App() {
  return (
    <div className="App">
      <h1>MiniCodeLab - [Hooks useMemo & useCallback]</h1>

      <MiniCodeTabManager
        withUnset
        tabs={[
          {
            slug: 'useMemo',
            title: 'Ejemplos useMemo',
            content: MiniCodeUseMemo,
          },
          {
            slug: 'useCallback',
            title: 'Ejemplos useCallback',
            content: MiniCodeUseCallback,
          },
        ]}
      />
    </div>
  );
}

export default App;
