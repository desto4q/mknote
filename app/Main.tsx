import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import Stacks from './nav/Stacks';
import {SearchContextProvider} from './components/SearchContext';
import {colors} from './utils/utils';
let mytheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.neutral[900],
  },
};
export default function Main() {
  return (
    <SearchContextProvider>
      <NavigationContainer theme={mytheme}>
        <Stacks />
      </NavigationContainer>
    </SearchContextProvider>
  );
}
