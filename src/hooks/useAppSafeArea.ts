import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppTheme} from './useAppTheme';

export const useAppSafeArea = () => {
  const {spacing} = useAppTheme();
  const {top, bottom} = useSafeAreaInsets();

  return {
    top: Math.max(top, spacing.s8),
    bottom: Math.max(bottom, spacing.s8),
  };
};
