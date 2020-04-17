import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { Provider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import BlogScreen from './src/screens/BlogScreen';
import CreateBlogScreen from './src/screens/CreateBlogScreen';

StatusBar.setBarStyle('dark-content');

const Stack = createStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation }) => ({
            title: 'Blog',
            headerRightContainerStyle: { paddingRight: 10 },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <MaterialIcons name="add" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Blog" component={BlogScreen} options={{ title: 'Blog' }} />
        <Stack.Screen name="Create" component={CreateBlogScreen} options={{ title: 'Create Blog' }} />
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