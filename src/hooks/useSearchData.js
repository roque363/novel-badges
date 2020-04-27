import React, { useState } from 'react'
// Utils
import normalize from 'utils/normalize'

function useSearchData(data) {
  const [ query, setQuery ] = useState('');
  const [ filteredData, setFilteredData ] = useState(data);

  React.useMemo(() => {
    const result = data.filter(badge => {
      return `${normalize(badge.title)}`
        .toLowerCase()
        .includes(normalize(query.toLowerCase()));
    });
    setFilteredData(result)
  }, [ data, query ]);

  return { query, setQuery, filteredData }
}

export default useSearchData
