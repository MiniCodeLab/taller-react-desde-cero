import { useEffect, useState } from 'react';
import useDebounceString from '../hooks/useDebounceString';

const getStartWarsMovies = async (title: string) => {
  console.log('Pidiendo las pelis a la API con título', title);

  const response = await new Promise((resolve) => {
    setTimeout(() => {
      if (title.includes('imperio')) {
        resolve([{ title: 'El imperio contraataca' }]);
      } else {
        resolve([]);
      }
    }, 1000);
  });

  return response;
};

const MiniCodeDebounce = () => {
  const [filter, setFilter] = useState('');
  const debouncedFilter = useDebounceString(filter, 250);

  console.log({ filter, debouncedFilter });

  useEffect(() => {
    if (debouncedFilter) {
      getStartWarsMovies(debouncedFilter).then((movies) => {
        console.log(movies);
      });
    }
  }, [debouncedFilter]);

  return (
    <div>
      <h2>Star Wars API</h2>

      <div>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MiniCodeDebounce;
