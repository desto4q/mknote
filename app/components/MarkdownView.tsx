import Markdown from '@ronradtke/react-native-markdown-display';
import {Text, View} from 'react-native';
import {colors, tw} from '../utils/utils';

let MarkdownView = ({body, title}: {body: string; title: string}) => {
  return (
    <View style={tw('px-2 flex-1 rounded-md gap-2')}>
      <View style={tw('bg-neutral-800 p-2  rounded-md')}>
        <Text>{title}</Text>
      </View>

      <View style={tw('bg-neutral-800 p-2 rounded-md flex-1')}>
        <Markdown
          style={{
            fence: {
              backgroundColor: colors.neutral[700],
              borderColor: colors.neutral[600],
            },
          }}>
          {body}
        </Markdown>
      </View>
    </View>
  );
};

export default MarkdownView;
