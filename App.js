import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import BlogScreen from './src/screens/BlogScreen';
import CreateBlogScreen from './src/screens/CreateBlogScreen';

StatusBar.setBarStyle('dark-content');

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index"  component={IndexScreen}      options={{ title: 'Blog' }} />
        <Stack.Screen name="Blog"   component={BlogScreen}       options={{ title: 'Blog' }} />
        <Stack.Screen name="Create" component={CreateBlogScreen} options={{ title: 'Create' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}