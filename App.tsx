import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from './src/themes';
import { MainRouter } from './src/routes';

const App = () => {
  let [fontsLoaded] = useFonts({
    Epilogue: require('./assets/fonts/epilogue.ttf'),
    Rajdhani: require('./assets/fonts/rajdhani.ttf')
  });

  if (!fontsLoaded) {
    return (
      <></>
    )
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="light" />
      <MainRouter />
    </ThemeProvider>
  );
}

export default App
