import {MMKVLoader} from 'react-native-mmkv-storage';
import uuid from 'react-native-uuid';
const notesStorage = new MMKVLoader().withInstanceID('storage').initialize();

interface INotes {
  title: string;
  body: string;
}

let getObj = (title: string) => {
  let parsed = notesStorage.getMap(title);

  return parsed;
};
let addToStorage = ({title, body}: INotes) => {
  let obj = {
    title: title,
    body: body,
  };
  let id = uuid.v4().toString();
  notesStorage.setMap(id, obj);
  console.log(getObj(id));
};

let clearStorage = () => {
  notesStorage.clearStore();
  return;
};

interface IUpdate {
  id: string;
  title: string;
  body: string;
}
let updateNote = ({id, title, body}: IUpdate) => {
  let obj = {
    title: title,
    body: body,
  };
  notesStorage.setMap(id, obj);
  console.log(getObj(id));
};

let getAllNotes = async () => {
  let items = await notesStorage.indexer.maps.getAll();
  // console.log(items);
  return items as any[];
};
export {addToStorage, clearStorage, getAllNotes, updateNote};
export type {INotes};
