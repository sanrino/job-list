import { useContext } from 'react'
import { FiltersContext } from '../providers/FiltersProvider';

const useFiltersContext = () => {
	const value = useContext(FiltersContext);
	return value;
}

export { useFiltersContext };