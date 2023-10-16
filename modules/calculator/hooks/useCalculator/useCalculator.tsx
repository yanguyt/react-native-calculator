import { useContext } from 'react';
import calculatorContext, { CalculatorContextProps } from '../../context/calculatorContext';

const useCalculator = (): CalculatorContextProps => {
  const context = useContext(calculatorContext);
  return { ...context };
};

export default useCalculator;
