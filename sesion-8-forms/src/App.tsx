import './App.css';
import HookForm from './components/HookForm';
// import HookFormRefactored from './components/HookFormRefactored';
// import RefForm from './components/RefForm';
// import StateForm from './components/StateForm';

const App = () => {
  return (
    <div className="App">
      <h1>MiniCodeLab - Forms</h1>
      {/* <StateForm /> */}
      {/* <RefForm /> */}
      {/* <HookFormRefactored /> */}
      <HookForm />
    </div>
  );
};

export default App;
