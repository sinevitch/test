import { Linking } from 'react-native';

export const DetailsScreenHook = (navigation) => {
  const handlerLinking = (url) => {
    Linking.openURL(url);
  };
  const handlerNavigation = () => {
    navigation.navigate('Home');
  };
  return { handlerLinking, handlerNavigation };
};
