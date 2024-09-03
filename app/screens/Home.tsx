import {View, Text, LayoutAnimation} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBar from '../components/SearchBar';
import {colors, tw} from '../utils/utils';
import Body from '../components/Body';
import FloatingButton from '../components/FloatingButton';
import {useMultiSelect} from '../components/MultiSelectContext';
import SelectOptions from '../components/SelectOptions';

export default function Home() {
  let {keys} = useMultiSelect();
  let [showMenu, SetShowMenu] = useState(false);
  useEffect(() => {
    updater();
  }, [keys]);
  let configure = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
  let updater = () => {
    configure();

    if (keys.length < 1) {
      SetShowMenu(false);
    } else {
      SetShowMenu(true);
    }
  };
  return (
    <View style={tw('px-4 py-2 flex-1 gap-2')}>
      {!showMenu ? <SearchBar /> : <SelectOptions />}
      <Body />
      <FloatingButton />
    </View>
  );
}
