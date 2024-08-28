import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import {colors, tw} from '../utils/utils';
import Body from '../components/Body';
import FloatingButton from '../components/FloatingButton';

export default function Home() {
  useEffect(() => {
    // console.log(colors.amber);
  }, []);
  return (
    <View style={tw('px-4 py-2 flex-1')}>
      <SearchBar />
      <Body />
      <FloatingButton />
    </View>
  );
}
