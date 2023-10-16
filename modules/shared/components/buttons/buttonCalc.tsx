import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../styles/globalStyles';

interface ButtonProps {
  title: string;
  textColor?: string;
  backgroundColor?: string;
  onPress?: () => void;
  bold?: boolean;
}
const ButtonCalc = ({ title, textColor, backgroundColor, onPress, bold }: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[styles.buttonContainer, { backgroundColor: backgroundColor ?? 'rgba(0,0,0,0)' }]}
      >
        <Text style={[{ color: textColor, fontWeight: bold ? 'bold' : 'normal' }, styles.text]}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 80,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 100,
  },
  text: {
    fontSize: 18,
  },
});

export default ButtonCalc;
