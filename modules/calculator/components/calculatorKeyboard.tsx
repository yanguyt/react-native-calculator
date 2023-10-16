import { View, StyleSheet } from 'react-native';
import { OperationType } from '../interfaces/operations';
import ButtonCalc from '../../shared/components/buttons/buttonCalc';
import { GlobalStyles } from '../../shared/styles/globalStyles';
import useCalculator from '../hooks/useCalculator/useCalculator';

interface ButtonInfo {
  value: string;
  label: string;
  type: OperationType;
  color?: string;
  bgColor?: string;
  bold?: boolean;
}
const CalculatorKeyboard = () => {
  const { setValue, value, setOperations, result } = useCalculator();
  const buttons: ButtonInfo[][] = [
    [
      {
        value: 'C',
        label: 'C',
        type: OperationType.CLEAR,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '+/-',
        label: '+/-',
        type: OperationType.CLEAR,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '%',
        label: '%',
        type: OperationType.CLEAR,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '/',
        label: '/',
        type: OperationType.DIVIDE,
        color: 'red',
        bold: true,
      },
    ],
    [
      {
        value: '7',
        label: '7',
        type: OperationType.NUMBER,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '8',
        label: '8',
        type: OperationType.NUMBER,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '9',
        label: '9',
        type: OperationType.NUMBER,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '*',
        label: 'x',
        type: OperationType.MULTIPLY,
        color: 'red',
        bold: true,
      },
    ],
    [
      {
        value: '4',
        label: '4',
        type: OperationType.NUMBER,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '5',
        label: '5',
        type: OperationType.NUMBER,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '6',
        label: '6',
        type: OperationType.NUMBER,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '+',
        label: '+',
        type: OperationType.ADD,
        color: 'red',
        bold: true,
      },
    ],
    [
      {
        value: '1',
        label: '1',
        type: OperationType.NUMBER,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '2',
        label: '2',
        type: OperationType.NUMBER,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '3',
        label: '3',
        type: OperationType.NUMBER,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '-',
        label: '-',
        type: OperationType.SUBTRACT,
        color: 'red',
        bold: true,
      },
    ],
    [
      {
        value: '.00',
        label: '.00',
        type: OperationType.NUMBER,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '0',
        label: '0',
        type: OperationType.NUMBER,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '.',
        label: '.',
        type: OperationType.NUMBER,
        color: 'rgba(0,0,0,0.3)',
      },
      {
        value: '=',
        label: '=',
        type: OperationType.RESULT,
        color: 'white',
        bgColor: 'red',
        bold: true,
      },
    ],
  ];

  const handleButtonPress = (buttonValue: string, type: OperationType) => {
    switch (type) {
      case OperationType.NUMBER:
        const newValue = parseFloat(`${value}${buttonValue}`);
        setValue?.(newValue);
        return;
      case OperationType.CLEAR:
        if (value == 0) {
          setOperations?.([]);
        } else {
          setValue?.(0);
        }
        return;
      case OperationType.ADD:
        setOperations?.((prev) => [
          ...prev,
          { type: OperationType.NUMBER, value: value.toString() },
          { type, value: buttonValue },
        ]);
        setValue?.(0);
        return;
      case OperationType.SUBTRACT:
        setOperations?.((prev) => [
          ...prev,
          { type: OperationType.NUMBER, value: value.toString() },
          { type, value: buttonValue },
        ]);
        setValue?.(0);
        setValue?.(0);
        return;
      case OperationType.MULTIPLY:
        setOperations?.((prev) => [
          ...prev,
          { type: OperationType.NUMBER, value: value.toString() },
          { type, value: buttonValue },
        ]);
        setValue?.(0);
        return;
      case OperationType.DIVIDE:
        setOperations?.((prev) => [
          ...prev,
          { type: OperationType.NUMBER, value: value.toString() },
          { type, value: buttonValue },
        ]);
        setValue?.(0);
        return;
      case OperationType.RESULT:
        setValue?.(result);
        setOperations?.([]);
        return;
      default:
        break;
    }
  };

  return (
    <View style={[GlobalStyles.horizontalSafeArea]}>
      {buttons.map((row, index) => (
        <View
          style={[GlobalStyles.justifySpaceBetween, GlobalStyles.flexRow, GlobalStyles.alignCenter]}
          key={index}
        >
          {row.map((button) => (
            <ButtonCalc
              onPress={() => handleButtonPress(button.value, button.type)}
              backgroundColor={button.bgColor}
              textColor={button.color}
              title={button.label}
              key={button.value}
              bold={button.bold}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default CalculatorKeyboard;
