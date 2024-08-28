import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, tw} from '../utils/utils';
import {useNavigation} from '@react-navigation/native';
import {IconPencil} from '@tabler/icons-react-native';

export default function FloatingButton() {
  let navigate: any = useNavigation();
  let moveTo = () => {
    return navigate.navigate('NewNote');
  };
  return (
    <TouchableOpacity
      onPress={moveTo}
      style={tw(
        'absolute bottom-0 right-0 mr-6 mb-6 bg-neutral-800 rounded-md p-4 gap-2 items-center flex-row',
      )}>
      <IconPencil size={22} color={colors.neutral[300]} />
      <Text>New Note</Text>
    </TouchableOpacity>
  );
}
