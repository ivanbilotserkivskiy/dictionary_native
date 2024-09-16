import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Translate from './screens/Translate';
import { NavigationContainer } from '@react-navigation/native';
import Dictionary from './screens/Dictionary';
import { colors } from './assets/styles/style';

const TabRouter = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <TabRouter.Navigator>
          <TabRouter.Screen name="Home" component={Home}/>
          <TabRouter.Screen name="Translate" component={Translate}/>
          <TabRouter.Screen name="Dictionary" component={Dictionary}/>
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
