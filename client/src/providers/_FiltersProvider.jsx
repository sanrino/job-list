import React, { createContext, useMemo, useState } from "react";

export const FiltersContext = createContext(null);

const FiltersProvider = ({ children }) => {
  const baseFilters = {
    tools: [],
    languages: [],
    role: [],
    level: []
  }
  const [filtersСurrent, setFiltersСurrent] = useState(baseFilters);

  const value = useMemo(() => ({ filtersСurrent, setFiltersСurrent, baseFilters }), [filtersСurrent])

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  );
}

export default FiltersProvider;
