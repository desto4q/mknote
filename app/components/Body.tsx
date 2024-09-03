import {View, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {tw} from '../utils/utils';
import Cards from './Cards';
import {useStorage} from './StorageContext';

export default function Body() {
  let looger = () => {
    // console.log('i focused');
  };

  let {items, updateItems} = useStorage();

  useFocusEffect(
    useCallback(() => {
      updateItems();
    }, []),
  );
  return (
    <View style={tw('flex-1')}>
      {/* <Text>{searchTerm}</Text> */}
      <FlatList
        keyboardShouldPersistTaps="handled"
        key={2}
        contentContainerStyle={tw('gap-2  ')}
        numColumns={2}
        data={items}
        renderItem={e => {
          let item = e.item;
          return (
            <Cards
              id={item[0]}
              key={e.index}
              body={item[1].body}
              title={item[1].title}
            />
          );
        }}></FlatList>
    </View>
  );
}
