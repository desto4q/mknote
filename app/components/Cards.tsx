import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, tw} from '../utils/utils';
import Markdown, {MarkdownIt} from '@ronradtke/react-native-markdown-display';
import {INotes} from '../storage/storage';
import {useNavigation} from '@react-navigation/native';
// import Markdown from 'react-native-marked';
let bg = colors.neutral[800];

interface ICard extends INotes {
  id: number | string;
}

export default function Cards({title, body, id}: ICard) {
  let navigation: any = useNavigation();
  let onPress = () => {
    navigation.navigate('EditNote', {
      body: body,
      id: id,
      title: title,
    });
  };
  return (
    <View style={tw('bg-neutral-800 rounded-md m-1 w-[48%] min-h-16 p-2')}>
      <TouchableOpacity onPress={onPress}>
        <Text>Cards</Text>
        <Text>title</Text>
        {/* <Markdown
        styles={{
          blockquote
          li: {
            backgroundColor: bg,
          },
          paragraph: {
            backgroundColor: bg,
          },
          // code:{
          //   b
          // } 
        }}
        value={body}
      /> */}
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
