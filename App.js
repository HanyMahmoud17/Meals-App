import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const stack= createNativeStackNavigator();
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='MealCategory' component={CategoryScreen} />
      </stack.Navigator>
    </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({

});
