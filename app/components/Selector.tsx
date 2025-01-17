import {IconEye, IconPencil} from '@tabler/icons-react-native';
import {TouchableOpacity, View} from 'react-native';
import {tw, updateAnim} from '../utils/utils';

interface ISelector {
  id: number;
  setSelect?: (id: number) => any;
}
let Selector = ({id, setSelect}: ISelector) => {
  let updateSelect = (num: number) => {
    if (setSelect) {
      setSelect(num);
    }
  };
  return (
    <View style={tw('flex-row items-center bg-neutral-800  rounded-md ')}>
      <TouchableOpacity
        onPress={() => {
          updateSelect(0);
        }}
        style={tw(
          `${
            id == 0 ? 'bg-neutral-700' : ''
          } h-full items-center p-2  justify-center rounded-l-md`,
        )}>
        <IconPencil size={22} color={'white'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          updateSelect(1);
        }}
        style={tw(
          `${
            id == 1 ? 'bg-neutral-700' : ''
          } p-2 h-full items-center justify-center rounded-r-md `,
        )}>
        <IconEye size={22} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default Selector;
