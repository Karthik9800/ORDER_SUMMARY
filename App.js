// import OrderSummary from './src/screens/OrderSummaryScreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import DeliveryAddressScreen from './src/screens/DeliveryToScreen';
// import PaymentScreen from './src/screens/PaymentPage';
// import StartScreen from './src/screens/StartScreen';
// import SignInScreen from './src/screens/SignInScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import React,{createContext,useReducer} from 'react';
// import CartScreen from './src/screens/CartScreen';
// import ProductScreen from './src/screens/FoodDetailScreen';
// import ChatScreen from './src/Components/ChatBotScreen';


// const Stack=createNativeStackNavigator()

// export const CartContext = createContext();

// const initialState = { items: [] };

// function cartReducer(state, action) {
//   switch (action.type) {
//     case 'ADD':
//       const existing = state.items.find(i => i.id === action.payload.id);
//       if (existing) {
//         return {
//           ...state,
//           items: state.items.map(i =>
//             i.id === action.payload.id ? { ...i, qty: i.qty + action.payload.qty } : i
//           ),
//         };
//       }
//       return { ...state, items: [...state.items, action.payload] };
//     case 'REMOVE':
//       return { ...state, items: state.items.filter(i => i.id !== action.payload) };
//     case 'CHANGE_QTY':
//       return {
//         ...state,
//         items: state.items.map(i =>
//           i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
//         ),
//       };
//     case 'CLEAR':
//       return initialState;
//     default:
//       return state;
//   }
// }

// export default function App() {

// const [state, dispatch] = useReducer(cartReducer, initialState);

//   return (
//       <CartContext.Provider value={{ state, dispatch }}>
//       <NavigationContainer >
//         <Stack.Navigator screenOptions={{
//         headerShown:false
//       }}>
          
//           <Stack.Screen name='Start Page' component={StartScreen}/>
//           <Stack.Screen name='SignIn Page' component={SignInScreen}/>
//           <Stack.Screen name='SignUp Page' component={SignUpScreen}/>
//           <Stack.Screen name='Bot Page' component={ChatScreen }/>
//           <Stack.Screen name='Home Page' component={HomeScreen}/>
//           <Stack.Screen name='Product Page' component={ProductScreen}/>
//           <Stack.Screen name='Cart Page' component={CartScreen}/>
//           <Stack.Screen name='Address Page' component={DeliveryAddressScreen}/> 
//           <Stack.Screen name='Order Page' component={OrderSummary}/>
//           <Stack.Screen name='Payment Page' component={PaymentScreen}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//      </CartContext.Provider>

//   )   
// }


// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from '@expo/vector-icons/Ionicons';
import MenuScreen from "./src/screens/MenuScreen";
import CartScreen from "./src/screens/CartScreen";
import FavoritesScreen from "./src/screens/FavouritesScreen";
import { AppProvider } from "./src/Context/AppContext";
import CartIcon from "./src/Components/CartIcon";
import HomeScreen from "./src/screens/HomeScreen"
import FoodDetailScreen from "./src/screens/FoodDetailScreen";
import DeliverToScreen from "./src/screens/DeliveryToScreen";
import OrderSummaryScreen from "./src/screens/OrderSummaryScreen";
import PaymentScreen from "./src/screens/PaymentPage"
import StartScreen from "./src/screens/StartScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ChatScreen from "./src/Components/ChatBotScreen";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home Page") iconName = "home";
          else if (route.name === "Cart Page") iconName = "cart";
          else if (route.name === "Favorites Page") iconName = "heart";
          else if (route.name === "Menu Page") iconName = "restaurant";
          else if (route.name === "Chat Page") iconName = "chatbox-ellipses";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home Page" component={HomeScreen} />
      <Tab.Screen name="Menu Page" component={MenuScreen} />
      {/* <Tab.Screen name="Cart" component={CartScreen} /> */}
      <Tab.Screen name="Favorites Page" component={FavoritesScreen} />
      <Tab.Screen name="Chat Page" component={ChatScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start Page" component={StartScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Chat Page" component={ChatScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignIn Page" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp Page" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home Page" component={HomeTabs} options={{ headerShown: false }} />
         
          <Stack.Screen name="Menu Page" component={MenuScreen} options={{
            title: "Our Menu",
            headerRight: () => <CartIcon />
          }
          } />
          <Stack.Screen name="Cart Page" component={CartScreen} />
          <Stack.Screen name="FoodDetails Page" component={FoodDetailScreen} />
          <Stack.Screen name="DeliverTo Page" component={DeliverToScreen} />
          <Stack.Screen name="OrderSummary Page" component={OrderSummaryScreen} />
          <Stack.Screen name="Payment Page" component={PaymentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

 