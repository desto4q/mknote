import {IconArrowLeft} from '@tabler/icons-react-native';
import {TouchableOpacity} from 'react-native';
import {tw} from '../utils/utils';
import {useNavigation} from '@react-navigation/native';

let GoBack = ({style}: {style?: string}) => {
  let navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={tw(' p-2  items-center justify-center')}>
      <IconArrowLeft size={22} color={'white'} />
    </TouchableOpacity>
  );
};

export default GoBack;
