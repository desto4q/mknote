import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, tw} from '../utils/utils';
import Markdown, {MarkdownIt} from '@ronradtke/react-native-markdown-display';
import {INotes} from '../storage/storage';
import {useNavigation} from '@react-navigation/native';
import {useMultiSelect} from './MultiSelectContext';
// import Markdown from 'react-native-marked';
let bg = colors.neutral[800];

interface ICard extends INotes {
  id: string;
}

export default function Cards({title, body, id}: ICard) {
  let {addKey, removeKey, keys, selectMode} = useMultiSelect();
  let navigation: any = useNavigation();
  let [border, setBorder] = useState<string>();
  let onPress = () => {
    if (selectMode) {
      addKey(id);
      return;
    }
    navigation.navigate('EditNote', {
      body: body,
      id: id,
      title: title,
    });
  };

  let borderUpdate = () => {
    if (keys.includes(id)) {
      setBorder('border-red-200 border');
    } else {
      setBorder('');
    }
  };
  useEffect(() => {
    borderUpdate();
  }, [keys]);
  return (
    <View
      style={[
        tw('bg-neutral-800  rounded-md m-1 w-[48%] min-h-16  '),
        tw(border),
      ]}>
      <TouchableOpacity
        onPress={onPress}
        delayLongPress={150}
        onLongPress={() => {
          // if (selectMode) {
          //   addKey(id);
          //   borderUpdate();
          // }
          addKey(id);
          borderUpdate();
        }}
        style={tw(' min-h-16 rounded-md p-2')}>
        {/* <Text>Cards</Text> */}
        <Text>{title || 'No Title'}</Text>

        <Markdown
          style={{
            fence: {
              backgroundColor: bg,
              borderColor: colors.neutral[600],
            },
          }}>
          {body}
        </Markdown>
      </TouchableOpacity>
    </View>
  );
}
