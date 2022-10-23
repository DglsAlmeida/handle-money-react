import { createContext } from 'react';
import { IAuthContext } from './interfaces';

export const AuthContext = createContext({} as IAuthContext)