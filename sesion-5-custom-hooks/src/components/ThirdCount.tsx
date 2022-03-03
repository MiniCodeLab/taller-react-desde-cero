import useCount from '../hooks/useCount';

const ThirdCount = () => {
  const { count, add, substract } = useCount();

  return (
    <div>
      <h2>Contador 3 🚀</h2>

      <div>
        <h3>El contador 3 vale {count}</h3>

        <button onClick={add}>Sumar</button>
        <br />
        <button onClick={substract}>Restar</button>
      </div>
    </div>
  );
};

export default ThirdCount;
