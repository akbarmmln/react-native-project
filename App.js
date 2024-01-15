import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
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