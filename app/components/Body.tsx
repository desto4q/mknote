import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useSearch} from './SearchContext';
import {useFocusEffect} from '@react-navigation/native';
import {tw} from '../utils/utils';
import {getAllNotes} from '../storage/storage';
import Cards from './Cards';

export default function Body() {
  let {searchTerm} = useSearch();
  let [items, setItems] = useState<any[]>([]);
  let looger = () => {
    console.log('i focused');
  };

  let updateItems = async () => {
    let resp = await getAllNotes();
    setItems(resp);
  };
  // useEffect(() => {
  //   console.log(items);
  // }, [items]);
  useFocusEffect(
    useCallback(() => {
      updateItems();
    }, []),
  );
  return (
    <View style={tw('flex-1')}>
      <Text>{searchTerm}</Text>
      <FlatList
        key={2}
        contentContainerStyle={tw('gap-2  ')}
        numColumns={2}
        data={items}
        renderItem={e => {
          let item = e.item;
          // return <Text>ss</Text>;
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
