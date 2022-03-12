import { View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer, DefaultTheme as RNNavigationDefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from './src/themes';
import { Greeting, ChoseEventType, AvailableEvents, EventPage } from './src/screens'

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

  const RNNavTheme = {
    ...RNNavigationDefaultTheme,
    colors: {
      ...RNNavigationDefaultTheme.colors,
      background: defaultTheme.palette.gray.background,
      text: defaultTheme.palette.primary.contrast1,
      primary: defaultTheme.palette.primary.main,
    },
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaView style={{
          flex: 1,
          paddingTop: Constants.statusBarHeight,
          paddingBottom: 16,
          backgroundColor: defaultTheme.palette.gray.background
        }}>
        <NavigationContainer theme={RNNavTheme}>
          <Stack.Navigator initialRouteName='Greeting' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Greeting' component={Greeting}/>
            <Stack.Screen name='ChoseEventType' component={ChoseEventType}/>
            <Stack.Screen name='AvailableEvents' component={AvailableEvents}/>
            <Stack.Screen name='EventPage' component={EventPage}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
