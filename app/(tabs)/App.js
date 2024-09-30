import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela1 from './screens/Tela1';
import Tela2 from './screens/Tela2'; // Tela de carrinho
import { CartProvider } from './CartContext'; // Provedor do contexto

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tela1">
          <Stack.Screen name="Tela1" component={Tela1} options={{ headerShown: false }} />
          <Stack.Screen name="CartScreen" component={Tela2} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;