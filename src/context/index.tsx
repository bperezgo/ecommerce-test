import { createContext } from 'react';
import { IContext } from '../@types';
import { initialState } from '../state/initialState';
export default createContext<IContext>(initialState);
