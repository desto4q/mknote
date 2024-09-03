// import React, {
//   createContext,
//   ReactNode,
//   useContext,
//   useEffect,
//   useState,
// } from 'react';

// interface IMultiSelect {
//   addKey: (key: string) => any;
//   removeKey: (key: string) => any;
//   keys: string[];
//   clearKeys: () => any;
//   selectMode: boolean;
// }

// let MultiSelectContext = createContext<IMultiSelect | null>(null);

// let MultiSelectContextProvider = ({children}: {children: ReactNode}) => {
//   let [keys, setKeys] = useState<string[]>([]);

//   let [selectMode, setSelectMode] = useState<boolean>(false);
//   let selectUpdater = () => {
//     if (keys.length > 0) {
//       if (selectMode) {
//         return;
//       } else {
//         setSelectMode(true);
//         return;
//       }
//     } else {
//       setSelectMode(false);
//     }
//   };
//   useEffect(() => {
//     selectUpdater();
//   }, [keys]);

//   let addKey = (key: string) => {
//     if (keys.includes(key)) {
//       removeKey(key);
//       return;
//     }
//     setKeys(prev => [...prev, key]);
//   };

//   let clearKeys = () => {
//     setKeys([]);
//   };

//   let removeKey = (key: string) => {
//     let newKeys = keys.filter(e => e !== key); // Remove the specific key
//     setKeys(newKeys); // Update the state with the new keys
//   };
//   let values = {removeKey, addKey, keys, clearKeys, selectMode};
//   return (
//     <MultiSelectContext.Provider value={values}>
//       {children}
//     </MultiSelectContext.Provider>
//   );
// };

// let useMultiSelect = () => {
//   let context = useContext(MultiSelectContext);
//   if (!context) {
//     throw new Error('useSearch must be used within a SearchContextProvider');
//   }

//   return context;
// };

// export {useMultiSelect, MultiSelectContextProvider};

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IMultiSelect {
  addKey: (key: string) => void;
  removeKey: (key: string) => void;
  keys: string[];
  clearKeys: () => void;
  selectMode: boolean;
  updateKey: (arr: string[]) => any;
}

const MultiSelectContext = createContext<IMultiSelect | null>(null);

const MultiSelectContextProvider = ({children}: {children: ReactNode}) => {
  const [keys, setKeys] = useState<string[]>([]);
  const [selectMode, setSelectMode] = useState<boolean>(false);

  useEffect(() => {
    setSelectMode(keys.length > 0);
  }, [keys]);
  // let selectUpdater = () => {
  //   if (keys.length > 0) {
  //     if (selectMode) {
  //       return;
  //     } else {
  //       setSelectMode(true);
  //       return;
  //     }
  //   } else {
  //     setSelectMode(false);
  //   }
  // };
  // useEffect(() => {
  //   selectUpdater();
  // }, [keys]);
  const addKey = (key: string) => {
    setKeys(prevKeys =>
      prevKeys.includes(key)
        ? prevKeys.filter(k => k !== key)
        : [...prevKeys, key],
    );
  };

  const updateKey = (arr: string[]) => {
    setKeys(arr);
  };
  const clearKeys = () => {
    setKeys([]);
    setSelectMode(false);
  };

  const removeKey = (key: string) => {
    setKeys(prevKeys => prevKeys.filter(k => k !== key));
  };

  const values = {removeKey, addKey, keys, clearKeys, selectMode, updateKey};
  return (
    <MultiSelectContext.Provider value={values}>
      {children}
    </MultiSelectContext.Provider>
  );
};

const useMultiSelect = () => {
  const context = useContext(MultiSelectContext);
  if (!context) {
    throw new Error(
      'useMultiSelect must be used within a MultiSelectContextProvider',
    );
  }
  return context;
};

export {useMultiSelect, MultiSelectContextProvider};
