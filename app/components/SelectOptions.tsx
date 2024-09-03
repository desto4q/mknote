import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {showDeleteNotif, tw, updateAnim} from '../utils/utils';
import {IconBucket, IconSelectAll, IconX} from '@tabler/icons-react-native';
import {useMultiSelect} from './MultiSelectContext';
import {getAllKeys, removeList} from '../storage/storage';
import {useStorage} from './StorageContext';

export default function SelectOptions() {
  let {clearKeys, updateKey, keys, addKey} = useMultiSelect();
  let {updateItems} = useStorage();
  let removeItems = () => {
    if (keys.length < 1) {
      return;
    }
    try {
      let itemNumber = keys.length;
      removeList(keys);
      clearKeys();
      updateItems();
      showDeleteNotif(itemNumber);
    } catch (err) {
      console.log(err);
    }
  };

  let addAllKeys = async () => {
    let keys = await getAllKeys();
    if (keys) {
      updateAnim();
      updateKey(keys);
    }
    return;
  };

  return (
    <View style={tw('h-14 items-center flex-row')}>
      <TouchableOpacity style={tw('p-2 ')} onPress={clearKeys}>
        <IconX size={22} color={'white'} />
      </TouchableOpacity>
      <Text>{String(keys.length)}</Text>
      <View style={tw('flex-row ml-auto')}>
        <TouchableOpacity style={tw('p-2  ')} onPress={addAllKeys}>
          <IconSelectAll size={22} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity style={tw('p-2  ')} onPress={removeItems}>
          <IconBucket size={22} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
