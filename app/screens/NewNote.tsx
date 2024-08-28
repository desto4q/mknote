import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors, tw} from '../utils/utils';
import {addToStorage, clearStorage} from '../storage/storage';
import PagerView from 'react-native-pager-view';
import MarkdownView from '../components/MarkdownView';
import {IconArrowLeft, IconPencil} from '@tabler/icons-react-native';
import Selector from '../components/Selector';
import GoBack from '../components/GoBack';

export default function NewNote() {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');
  let [initialPage, setIntialPage] = useState(0);

  let onPres = () => {
    if (body.length < 1) {
      Alert.alert('body is empty ');
      return;
    }
    addToStorage({title: title, body: body});
  };

  let clear = () => {
    clearStorage();
  };
  let updatePage = (id: number) => {
    setIntialPage(id);
    pagerRef.current.setPage(id);
  };

  let pagerRef = useRef<any>();

  return (
    <View style={tw('flex-1 py-2 gap-2 px-4')}>
      <View style={tw('h-14 flex-row justify-between ')}>
        <GoBack />
        <Selector id={initialPage} setSelect={updatePage} />
        <TouchableOpacity
          style={tw(
            'p-2 items-center justify-center bg-emerald-600 rounded-md',
          )}
          onPress={onPres}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
      <PagerView
        onPageSelected={e => {
          setIntialPage(e.nativeEvent.position);
          //   console.log('changed', e.nativeEvent.position);
        }}
        ref={pagerRef}
        style={tw('flex-1')}
        initialPage={initialPage}>
        <View key={1} style={tw('flex-1 gap-2')}>
          <View style={tw('bg-neutral-800 rounded-md ')}>
            <TextInput
              style={tw('p-2')}
              value={title}
              onChangeText={e => setTitle(e)}
              placeholder="Title"></TextInput>
          </View>
          <View style={tw('bg-neutral-800 rounded-md flex-1 ')}>
            <TextInput
              style={tw('flex-1 p-2 text-left')} // Text-left ensures cursor at the start
              value={body}
              onChangeText={e => setBody(e)}
              placeholder="fun"
              multiline={true} // Allows it to grow
              textAlignVertical="top" // Ensures text starts at the top
            />
          </View>
          <View>{/* <Markdown>{body}</Markdown> */}</View>
        </View>
        <MarkdownView body={body} title={title} key={2} />
      </PagerView>
    </View>
  );
}
