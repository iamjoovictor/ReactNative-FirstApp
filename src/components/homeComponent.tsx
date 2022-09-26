import { Image, Pressable, Text, View } from 'react-native';
import styles from '../styles/homeStyles';

export function HomeComponent() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Image source={require('../../assets/appLogo.png')} ></Image>   
      </Pressable>
    </View>
  );
}