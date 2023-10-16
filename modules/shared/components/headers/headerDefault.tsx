import { View, Platform, StyleSheet, Text, Pressable } from 'react-native';
import { GlobalStyles } from '../../styles/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

interface HeaderDefaultProps {
  title?: string;
  pop: () => void;
}

const HeaderDefault = ({ title, pop }: HeaderDefaultProps) => {
  const router = useRouter();
  return (
    <View
      style={[
        GlobalStyles.flexRow,
        GlobalStyles.justifySpaceBetween,
        style.header,
        GlobalStyles.alignCenter,
      ]}
    >
      <Pressable onPress={() => pop()}>
        <MaterialIcons name="menu" size={24} color="black" />
      </Pressable>
      <Text>{title}</Text>
      <Pressable onPress={() => pop()}>
        <MaterialIcons name="close" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default HeaderDefault;

const style = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 70 : 0,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
});
