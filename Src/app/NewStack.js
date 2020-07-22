/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScren from '../Screens/Home';
import Listing from '../Screens/Listing';





import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

class NewStack extends React.Component{

  render()
  {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
         
        </ScrollView>
   
    </>
  );
          }
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer > 
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} >
      <Stack.Screen  name="HomeScreen" component={HomeScren} Header={null}/>
      <Stack.Screen name="Listing" component={Listing}  />
      <Stack.Screen name="NewStack" component={NewStack} />
  
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;