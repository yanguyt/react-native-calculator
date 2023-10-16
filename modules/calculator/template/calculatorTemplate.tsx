import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalculatorProvider from '../providers/calculatorProvider';
import ResultValue from '../components/resultValue';
import CalculatorKeyboard from '../components/calculatorKeyboard';
import { GlobalStyles } from '../../shared/styles/globalStyles';

const CalculatorTemplate = () => {
  return (
    <CalculatorProvider>
      <View style={[GlobalStyles.justifyEnd, styles.viewContainer]}>
        <ResultValue />
        <CalculatorKeyboard />
      </View>
    </CalculatorProvider>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
    height: '100%',
    paddingBottom: 32,
  },
});

export default CalculatorTemplate;
