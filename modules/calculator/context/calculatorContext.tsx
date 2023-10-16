import { Dispatch, SetStateAction, createContext } from 'react';
import { Operation } from '../interfaces/operations';

export interface CalculatorContextProps {
  value: number;
  setValue?: (value: number) => void;
  operations: Operation[];
  setOperations?: Dispatch<SetStateAction<Operation[]>>;
  result: number;
}

export default createContext<CalculatorContextProps>({ value: 0, operations: [], result: 0 });
