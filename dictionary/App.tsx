import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Translate from './screens/Translate';
import { NavigationContainer } from '@react-navigation/native';
import Dictionary from './screens/Dictionary';
import { colors } from './assets/styles/style';
import { AntDesign } from '@expo/vector-icons';

const TabRouter = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <TabRouter.Navigator>
          <TabRouter.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}/>
          <TabRouter.Screen name="Translate" component={Translate} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign name="swap" size={24} color="black" />
            ),
          }}/>
          <TabRouter.Screen name="Dictionary" component={Dictionary} options={{
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign name="book" size={24} color="black" />
            ),
          }}/>
        </TabRouter.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
