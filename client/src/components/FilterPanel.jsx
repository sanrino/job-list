import React from 'react';
import { useFiltersContext } from '../hooks/useFiltersContext';

import { Badge } from '../UI/Badge';
import { Card } from '../UI/Card';
import { Stack } from '../UI/Stack';

const FiltersInit = (filtersСurrent) => {
  const {
    languages,
    role,
    level,
    tools
  } = filtersСurrent;

  if (filtersСurrent && Object.keys(filtersСurrent).length) {
    return [...languages, ...role, ...level, ...tools];
  }
};

const FilterPanel = () => {
  const { baseFilters, filtersСurrent, setFiltersСurrent } = useFiltersContext();

  const filtersPanel = FiltersInit(filtersСurrent);

  const handleRemoveFilter = (filterValue) => {
    for (let key in filtersСurrent) {
      if (filtersСurrent[key]?.includes(filterValue)) {
        setFiltersСurrent((prev) => ({
          ...prev,
          [key]: filtersСurrent[key].filter(item => item !== filterValue)
        }))
      }
    }
  };

  if (!filtersPanel.length) {
    return false
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {
            filtersPanel?.map((filterValue) => (
              <Badge
                key={filterValue}
                variant="clearable"
                onClear={() => handleRemoveFilter(filterValue)}
              >
                {filterValue}
              </Badge>
            ))
          }
        </Stack>

        <button className='link' onClick={() => setFiltersСurrent(baseFilters)}>Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };