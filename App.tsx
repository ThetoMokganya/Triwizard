/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { NavigationStack } from './navigation/Stack';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}

export default App;
