import {View, Text, SafeAreaView, Platform, UIManager} from 'react-native';
import React, {useEffect} from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import Stacks from './nav/Stacks';
import {SearchContextProvider} from './components/SearchContext';
import {colors} from './utils/utils';
import {MultiSelectContextProvider} from './components/MultiSelectContext';
import {clearStorage} from './storage/storage';
import {StorageContextProvider} from './components/StorageContext';
let mytheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.neutral[900],
  },
};
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
export default function Main() {
  // useEffect(()=>{
  //   clearStorage()
  // },[])
  return (
    <StorageContextProvider>
      <SearchContextProvider>
        <MultiSelectContextProvider>
          <NavigationContainer theme={mytheme}>
            <Stacks />
          </NavigationContainer>
        </MultiSelectContextProvider>
      </SearchContextProvider>
    </StorageContextProvider>
  );
}
