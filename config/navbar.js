import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/main';
import Register from '../screens/register';
import Dish from '../screens/dish';

const Stack = createNativeStackNavigator();

function Navbar() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Main} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dish" component={Dish} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navbar;