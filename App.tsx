import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Main from './app/Main';
import {colors} from './app/utils/utils';
import {NotifierWrapper} from 'react-native-notifier';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <NotifierWrapper>
          <StatusBar backgroundColor={colors.neutral[900]} />
          <Main />
        </NotifierWrapper>
      </GestureHandlerRootView>
    </>
  );
}
