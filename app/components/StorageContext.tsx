import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {getAllNotes} from '../storage/storage';
import {updateAnim} from '../utils/utils';

interface IStorage {
  items: any[];
  updateItems: () => any;
  setSearchItems: (items: any[]) => any;
}
let StorageContext = createContext<IStorage | null>(null);
let StorageContextProvider = ({children}: {children: ReactNode}) => {
  let [items, setItems] = useState<any[]>([]);
  let updateItems = async () => {
    let resp = await getAllNotes();
    setItems(resp);
  };
  let setSearchItems = (items: any[]) => {
    updateAnim();
    setItems(items);
  };
  useEffect(() => {
    updateItems();
  }, []);

  let values = {items, updateItems, setSearchItems};
  return (
    <StorageContext.Provider value={values}>{children}</StorageContext.Provider>
  );
};

let useStorage = () => {
  let context = useContext(StorageContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchContextProvider');
  }

  return context;
};

export {StorageContextProvider, useStorage};
