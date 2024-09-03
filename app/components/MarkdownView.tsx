import Markdown from '@ronradtke/react-native-markdown-display';
import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import {colors, tw} from '../utils/utils';

let MarkdownView = ({
  body,
  title,
  updatePage,
}: {
  body: string;
  title: string;
  updatePage?: (num: number) => any;
}) => {
  let onPress = () => {
    // updatePage && updatePage(0);
  };
  return (
    <View style={tw('px-2 flex-1 rounded-md gap-2')}>
      <View style={tw('bg-neutral-800 p-2  rounded-md')}>
        <Text>{title}</Text>
      </View>

      <View style={tw('bg-neutral-800 p-2 rounded-md flex-1')}>
        {/* <TouchableOpacity style={tw('h-full')}onPress={onPress}> */}
        <Markdown
          style={{
            fence: {
              backgroundColor: colors.neutral[700],
              borderColor: colors.neutral[600],
            },
          }}>
          {body}
        </Markdown>
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default MarkdownView;
