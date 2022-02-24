import { useMemo, useState } from 'react';

const numbersArray = [1, 2, 1, 4, 0, 6];

const mapScores = (scores: number[], caller: string) => {
  console.log('Invocamos mapScores =>', caller);

  return scores.map((num, index) => {
    const calc = (num * 3) / 2;
    const color = calc < 3 ? '🔴' : '🟢';

    return (
      <p key={index}>
        {calc} {color}
      </p>
    );
  });
};

const BasicUseMemo: React.FC = () => {
  const [rerender, setRerender] = useState<boolean>(false);

  const marksContent = mapScores(numbersArray, 'no-memo');

  const marksContentMemo = useMemo(() => {
    return mapScores(numbersArray, 'memo');
  }, []);

  return (
    <div>
      <div className="rows">
        <div>
          <h3>No memo</h3>
          {marksContent}
        </div>

        <div>
          <h3>Usando memo</h3>
          {marksContentMemo}
        </div>
      </div>

      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </div>
  );
};

export default BasicUseMemo;
