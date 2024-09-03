import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors, showNotification, tw, updateAnim} from '../utils/utils';
import {addToStorage, clearStorage, updateNote} from '../storage/storage';
import PagerView from 'react-native-pager-view';
import MarkdownView from '../components/MarkdownView';
import {
  IconArrowLeft,
  IconBookmark,
  IconPencil,
} from '@tabler/icons-react-native';
import Selector from '../components/Selector';
import GoBack from '../components/GoBack';
interface IEdit {
  title: string;
  body: string;
  key: string | number;
}
export default function EditNote({route}: any) {
  let {id, body, title} = route.params;
  useEffect(() => {}, []);
  let [EditTitle, setTitle] = useState(title);
  let [EditBody, setBody] = useState(body);
  let [initialPage, setIntialPage] = useState(1);

  let updatePage = (id: number) => {
    updateAnim();
    setIntialPage(id);
    pagerRef.current.setPage(id);
  };
  let onPress = () => {
    try {
      updateNote({
        id: id,
        title: EditTitle,
        body: EditBody,
      });
      showNotification(EditTitle);
    } catch (err) {}
  };

  let pagerRef = useRef<any>();
  return (
    <View style={tw('flex-1 py-2 gap-2 px-2')}>
      <View style={tw('h-12 flex-row justify-between ')}>
        <GoBack />
        <Selector id={initialPage} setSelect={updatePage} />
        <TouchableOpacity
          style={tw(
            'p-2 items-center justify-center bg-neutral-600 rounded-md',
          )}
          onPress={onPress}>
          <IconBookmark size={22} color={colors.neutral[200]} />
        </TouchableOpacity>
      </View>
      <PagerView
        onPageSelected={e => {
          setIntialPage(e.nativeEvent.position);
        }}
        ref={pagerRef}
        style={tw('flex-1')}
        initialPage={initialPage}>
        <View key={1} style={tw('flex-1 gap-2')}>
          <View style={tw('bg-neutral-800 rounded-md ')}>
            <TextInput
              style={tw('p-2')}
              value={EditTitle}
              onChangeText={e => setTitle(e)}
              placeholder="Title"></TextInput>
          </View>
          <View style={tw('bg-neutral-800 rounded-md flex-1 ')}>
            <TextInput
              style={tw('flex-1 p-2 text-left')} // Text-left ensures cursor at the start
              value={EditBody}
              onChangeText={e => setBody(e)}
              placeholder="fun"
              multiline={true} // Allows it to grow
              textAlignVertical="top" // Ensures text starts at the top
            />
          </View>
          <View>{/* <Markdown>{body}</Markdown> */}</View>
        </View>

        <MarkdownView
          body={EditBody}
          title={EditTitle}
          key={2}
          updatePage={updatePage}
        />
      </PagerView>
    </View>
  );
}
