import { View, Text, StyleSheet } from 'react-native';
import useCalculator from '../hooks/useCalculator/useCalculator';
import { GlobalStyles } from '../../shared/styles/globalStyles';

const ResultValue = () => {
  const { value, operations } = useCalculator();
  return (
    <View style={[GlobalStyles.justifyCenter, GlobalStyles.alignCenter, styles.resultContainer]}>
      <View style={[styles.operationsContainer]}>
        {operations.map((operation, index) => (
          <Text key={index}>{operation.value}</Text>
        ))}
      </View>

      <Text style={[styles.resultText]}>{value}</Text>
    </View>
  );
};
export default ResultValue;

const styles = StyleSheet.create({
  resultText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  resultContainer: {
    paddingTop: 70,
    paddingBottom: 100,
    backgroundColor: 'rgba(0,0,0,0.05)',
    flex: 1,
  },
  operationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
