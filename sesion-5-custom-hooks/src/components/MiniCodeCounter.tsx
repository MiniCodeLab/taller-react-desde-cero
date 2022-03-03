import useCount from '../hooks/useCount';
import ThirdCount from './ThirdCount';

const MiniCodeCounter = () => {
  const firstCount = useCount();
  const secondCount = useCount();

  return (
    <>
      <div>
        <h2>Contador 1 🚴‍♀️</h2>

        <div>
          <h3>El contador 1 vale {firstCount.count}</h3>

          <button onClick={firstCount.add}>Sumar</button>
          <br />
          <button onClick={firstCount.substract}>Restar</button>
        </div>
      </div>

      <div>
        <h2>Contador 2 🚴</h2>

        <div>
          <h3>El contador 2 vale {secondCount.count}</h3>

          <button onClick={secondCount.add}>Sumar</button>
          <br />
          <button onClick={secondCount.substract}>Restar</button>
        </div>
      </div>

      {firstCount.count > 5 ? <ThirdCount /> : null}
    </>
  );
};

export default MiniCodeCounter;
