import { useContext } from 'react';
import { GlobalTimersContext } from './GlobalTimersProvider';

export const useGlobalTimersContext = () => useContext(GlobalTimersContext);
