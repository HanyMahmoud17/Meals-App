import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

export default function App() {
  const stack= createNativeStackNavigator();
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#351401'},
        headerTintColor:'white',
        contentStyle:{backgroundColor:'#3f2f25'}
      }}>
        <stack.Screen name='MealCategory' component={CategoryScreen} options={{
          title:'All Categories'
        }} />
        <stack.Screen name='MealOverView' component={MealsOverviewScreen} />
        <stack.Screen name='MealDetail' component={MealDetailsScreen} />
      </stack.Navigator>
    </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({

});
