import { useContext } from 'react';
import { AppContext } from '../../providers/AppProvider';

const useUserContext = () => {
  const { valueUser } = useContext(AppContext);
  return valueUser;
}

export { useUserContext };