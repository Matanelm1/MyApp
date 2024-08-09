import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ShoppingListScreen from './screens/ShoppingListScreen';
import AddItemScreen from './screens/AddItemScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import UserDetail from './screens/UserDetail';
import ButtonScreen from './screens/ButtonScreen';
import FormScreen from './screens/FormScreen';
import ListScreen from './screens/ListScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'ShoppingList':
              iconName = focused ? 'list' : 'list-outline';
              break;
            case 'AddItem':
              iconName = focused ? 'add-circle' : 'add-circle-outline';
              break;
            case 'UserProfile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Buttons':
              iconName = focused ? 'radio-button-on' : 'radio-button-off';
              break;
            case 'Forms':
              iconName = focused ? 'create' : 'create-outline';
              break;
            case 'Lists':
              iconName = focused ? 'list' : 'list-outline';
              break;
            default:
              iconName = 'help-circle';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="ShoppingList" component={ShoppingListScreen} />
      <Tab.Screen name="AddItem" component={AddItemScreen} />
      <Tab.Screen name="UserProfile" component={UserProfileScreen} />
      <Tab.Screen name="Buttons" component={ButtonScreen} />
      <Tab.Screen name="Forms" component={FormScreen} />
      <Tab.Screen name="Lists" component={ListScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


















