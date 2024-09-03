import tailwind, {style as tw} from 'twrnc';
import {tailwind as colors} from 'easycolors';
import {LayoutAnimation} from 'react-native';

let updateAnim = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};
import {Notifier, NotifierComponents} from 'react-native-notifier';

let showNotification = (title: string) => {
  Notifier.showNotification({
    title: 'Saved',
    description: title,
    duration: 1200,
    showAnimationDuration: 400,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: 'success',
    },
  });
};

let showDeleteNotif = (num: number) => {
  Notifier.showNotification({
    title: 'Deleted',
    description: `Deleted ${num} items`,
    duration: 800,
    showAnimationDuration: 400,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: 'error',
    },
  });
};

let showBodyError = () => {
  Notifier.showNotification({
    title: 'Empty Note',
    description: `Body or Title is empty`,
    duration: 1200,
    showAnimationDuration: 400,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: 'info',
    },
  });
};
export {
  tw,
  colors,
  updateAnim,
  showNotification,
  showDeleteNotif,
  showBodyError,
};
