import { useContext } from 'react'
import { AppContext } from '../../providers/AppProvider';

const useFiltersContext = () => {
	const { valueFilters } = useContext(AppContext);

	return valueFilters;
}

export { useFiltersContext };