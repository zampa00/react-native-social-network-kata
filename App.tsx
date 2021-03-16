/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './src/components/Home';
import PublishMessage from './src/components/PublishMessage';
import { RouteParamList } from './src/params/Parameters';

const Stack = createStackNavigator<RouteParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PublishMessage" component={PublishMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
