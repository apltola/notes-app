import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { Provider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import BlogScreen from './src/screens/BlogScreen';
import CreateBlogScreen from './src/screens/CreateBlogScreen';
import EditBlogScreen from './src/screens/EditBlogScreen';

StatusBar.setBarStyle('dark-content');

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation }) => ({
            title: 'Notes App',
            headerRightContainerStyle: { paddingRight: 10 },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <MaterialIcons name="add" size={30} />
              </TouchableOpacity>
            ),
          })}
          /* listeners={{
            focus: () => {
              console.log('FOCUS!!!!!!!!!!!!!');
            }
          }} */
        />
        <Stack.Screen
          name="Blog"
          component={BlogScreen}
          options={({ navigation, props }) => ({
            title: 'Blog',
          })}
        />
        <Stack.Screen name="Create" component={CreateBlogScreen} options={{ title: 'Create Note' }} />
        <Stack.Screen name="Edit" component={EditBlogScreen} options={{ title: 'Edit Note' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}