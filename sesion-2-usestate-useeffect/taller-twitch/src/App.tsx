// import React from 'react'
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
      <hr />

      <MiniCodeComplexState />

      <hr />
      <hr />

      <MiniCodeStateCallback />

      <hr />

      <h2>Ejemplos con useEffect</h2>

      <MiniCodeEffectMount />

      <hr />
      <hr />

      <MiniCodeEffectUnmount />
    </div>
  );
};

export default App;
