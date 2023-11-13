import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// this is drawer navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import {Ionicons} from "@expo/vector-icons";
import FavoriteContextProvider from "./store/context/context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
 
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// add a nesting navigation of drawer
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle:{backgroundColor :"#351401"},
        drawerInactiveTintColor:'white',
        drawerActiveTintColor:'#3f2f25',
        drawerActiveBackgroundColor:'#e4baa1',
      }}
    >
      <Drawer.Screen name="categories" component={CategoryScreen} options={{
        title:'All Categories',
        drawerIcon:({color,size})=> <Ionicons color={color} size={size} name="list"/>
      }}/>
      <Drawer.Screen name="favorites" component={FavoriteScreen} options={{
        title:'Favorite Categories',
        drawerIcon:({color,size})=> <Ionicons color={color} size={size} name="star"/>
      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              // title:'All Categories',
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealOverView" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailsScreen}  options={{
            title:'About the Meal'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
      {/* </FavoriteContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
