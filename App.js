import React from 'react';
import { StatusBar } from 'react-native';
import MainNavigator from './navigation/MainNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} barStyle='dark-content' backgroundColor="#d1eaeb" />
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{ animationEnabled: false, header: () => null }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="MainNavigation"
          options={{ animationEnabled: true, header: () => null }}
          component={MainNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;