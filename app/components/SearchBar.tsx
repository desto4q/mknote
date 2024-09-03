import {View, Text, TextInput} from 'react-native';
import React, {useEffect} from 'react';
import {colors, tw} from '../utils/utils';
import {useSearch} from './SearchContext';
import {getAllNotes} from '../storage/storage';
import {search as fsearch} from 'fast-fuzzy';
import {useStorage} from './StorageContext';
import {IconSearch} from '@tabler/icons-react-native';

export default function SearchBar() {
  let {searchTerm, setSearch} = useSearch();

  let {items, setSearchItems, updateItems} = useStorage();

  let logSearchResults = (search: string) => {
    if (searchTerm.length > 0) {
      let found = fsearch(search, items, {
        keySelector: obj => `${obj[1].title} ${obj[1].body}`,
      });
      setSearchItems(found || []);
      return;
    }
    updateItems();
    return;
    // console.log(found);
  };

  useEffect(() => {
    logSearchResults(searchTerm);
  }, [searchTerm]);
  return (
    <View style={tw('w-full')}>
      <View
        style={tw(
          'bg-neutral-800 rounded-lg h-14 flex-row gap-1 items-center pl-2',
        )}>
        <IconSearch size={18} color={colors.neutral[200]} />
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
