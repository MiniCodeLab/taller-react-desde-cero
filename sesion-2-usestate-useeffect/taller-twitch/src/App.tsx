// import React from 'react'
// Podríamos usar los hooks de esta forma también:
// React.useState
// React.useEffect
import './App.css';
import MiniCodeComplexState from './components/MiniCodeComplexState';
import MiniCodeEffectMount from './components/MiniCodeEffectMount';
import MiniCodeEffectUnmount from './components/MiniCodeEffectUnmount';
import MiniCodeInput from './components/MiniCodeInput';
import MiniCodeStateCallback from './components/MiniCodeStateCallback';

const App: React.FC = () => {
  return (
    <div className="App">
      <h2>Ejemplos con useState</h2>

      <MiniCodeInput />

      <hr />

      <MiniCodeComplexState />

      <hr />

      <MiniCodeStateCallback />

      <hr />
      <hr />

      <h2>Ejemplos con useEffect</h2>

      <MiniCodeEffectMount />

      <hr />

      <MiniCodeEffectUnmount />
    </div>
  );
};

export default App;
