import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {tw} from '../utils/utils';
import {useSearch} from './SearchContext';

export default function SearchBar() {
  let {searchTerm, setSearch} = useSearch();
  return (
    <View style={tw('w-full')}>
      <View style={tw('bg-neutral-800 rounded-lg h-14')}>
        <TextInput
          style={tw(' w-full h-full')}
          placeholder="Search here"
          value={searchTerm}
          onChangeText={e => {
            setSearch(e);
          }}
        />
      </View>
    </View>
  );
}
