import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    "Segoe-UI-Bold" : require('./assets/fonts/Segoe-UI-Bold.ttf'),
    "Segoe-UI" : require('./assets/fonts/Segoe-UI.ttf'),
})

if(!loaded){
  return null;
}

  return (
    <NavigationContainer>
    <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
