import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from './src/themes';
import { Greeting } from './src/screens'

const Stack = createNativeStackNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
    Epilogue: require('./assets/fonts/epilogue.ttf'),
    Rajdhani: require('./assets/fonts/rajdhani.ttf')
  });

  if (!fontsLoaded) {
    return (
      <View style={{backgroundColor: 'black'}}></View>
    )
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Greeting' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Greeting' component={Greeting}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
