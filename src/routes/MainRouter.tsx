import { SafeAreaView } from "react-native"
import Constants from "expo-constants"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Greeting, ChoseEventType, AvailableEvents, EventPage, EventWebView } from '../screens';
import { defaultTheme } from '../themes';
import { RootStackParamList } from "../@types/navigation";

const RNNavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: defaultTheme.palette.gray.background,
    text: defaultTheme.palette.primary.contrast1,
    primary: defaultTheme.palette.primary.main,
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>()

const MainRouter = () => (
  <SafeAreaView style={{
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: defaultTheme.palette.gray.background
  }}>
  <NavigationContainer theme={RNNavTheme}>
    <Stack.Navigator initialRouteName='Greeting' screenOptions={{headerShown: false}}>
      <Stack.Screen name='Greeting' component={Greeting}/>
      <Stack.Screen name='ChoseEventType' component={ChoseEventType}/>
      <Stack.Screen name='AvailableEvents' component={AvailableEvents}/>
      <Stack.Screen name='EventPage' component={EventPage}/>
      <Stack.Screen name='EventWebView' component={EventWebView}
        options={({ route }) => ({
          headerShown: true,
          title: route.params.title,
          headerStyle: {
            backgroundColor: defaultTheme.palette.gray.background,
          },
          headerTintColor: defaultTheme.palette.primary.contrast1,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: "center"
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
  </SafeAreaView>
)

export default MainRouter
