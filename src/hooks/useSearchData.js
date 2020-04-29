import React, { useState } from 'react';
// Utils
import normalize from 'utils/normalize';

export function useSearchSerie(data) {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  React.useMemo(() => {
    const result = data.filter((serie) => {
      return `${normalize(serie.title)}`
        .toLowerCase()
        .includes(normalize(query.toLowerCase()));
    });
    setFilteredData(result);
  }, [data, query]);

  return { query, setQuery, filteredData };
}
