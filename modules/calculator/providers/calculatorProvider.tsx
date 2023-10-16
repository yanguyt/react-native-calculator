import { ReactNode, useMemo, useState } from 'react';
import CalculatorContext from '../context/calculatorContext';
import { Operation, OperationType } from '../interfaces/operations';

interface CalculatorProviderProps {
  children: ReactNode;
}

const CalculatorProvider = ({ children }: CalculatorProviderProps) => {
  const [value, setValue] = useState(0);
  const [operations, setOperations] = useState<Operation[]>([]);

  const typeOfOperation = (operation: OperationType, value: number, valueToAdd: number) => {
    switch (operation) {
      case OperationType.ADD:
        return value + valueToAdd;
      case OperationType.SUBTRACT:
        return value - valueToAdd;
      case OperationType.MULTIPLY:
        return value * valueToAdd;
      case OperationType.DIVIDE:
        return value / valueToAdd;

      default:
        return 0;
    }
  };

  const operationResult = useMemo(() => {
    let result = 0;
    if (operations.length) {
      for (let index = 0; index < operations.length; index++) {
        const element = operations[index];
        if (index + 1 == operations.length) {
          result = typeOfOperation(element.type, result, value);
        } else if (index == 0 && element.type == OperationType.NUMBER) {
          result = parseFloat(element.value);
        } else {
          const nextElement = operations[index + 1];
          if (element.type == OperationType.NUMBER) {
            result = typeOfOperation(nextElement.type, result, parseFloat(element.value));
          }
        }
      }
    } else {
      return value;
    }

    return result;
  }, [operations, value]);

  return (
    <CalculatorContext.Provider
      value={{ value, setValue, operations, setOperations, result: operationResult }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
