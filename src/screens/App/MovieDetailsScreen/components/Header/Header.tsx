import React, {useRef} from 'react';

import {AnimatedBox, Icon, TouchableOpacityBox} from '@components';
import {useFavoriteAddOrRemove, useIsFavorite} from '@domain';
import {useAppSafeArea, useAppTheme, useToast} from '@hooks';

import {HeaderProps} from './HeaderProps';

export const Header = ({navigation, scrollY, movieId}: HeaderProps) => {
  const {top} = useAppSafeArea();
  const {colors} = useAppTheme();
  const {isFavorite} = useIsFavorite(movieId);
  const {openToast} = useToast();
  const {addOrRemove} = useFavoriteAddOrRemove({
    onSuccess: () => {
      openToast(
        'success',
        isFavorite ? 'Removido dos favoritos' : 'Adicionado aos favoritos',
      );
    },
    onError: () => {
      openToast(
        'error',
        isFavorite
          ? 'Erro ao remover dos favoritos'
          : 'Erro ao adicionar aos favoritos',
      );
    },
  });

  const handleFavorite = () => {
    addOrRemove(movieId, !isFavorite);
  };

  const headerBackgroundColor = useRef(
    scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: ['rgba(0, 0, 0, 0)', colors.background],
      extrapolate: 'clamp',
    }),
  ).current;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <AnimatedBox
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      top={0}
      left={0}
      right={0}
      zIndex={1}
      paddingHorizontal="s16"
      height={60}
      style={{backgroundColor: headerBackgroundColor, paddingTop: top}}>
      <TouchableOpacityBox
        backgroundColor="gray1"
        borderRadius="s40"
        width={24}
        height={24}
        justifyContent="center"
        alignItems="center"
        onPress={goBack}>
        <Icon name="chevronLeft" size={12} color="primary" />
      </TouchableOpacityBox>
      <TouchableOpacityBox
        backgroundColor="primary"
        borderRadius="s40"
        width={24}
        height={24}
        justifyContent="center"
        alignItems="center"
        onPress={handleFavorite}>
        <Icon
          name={isFavorite ? 'heartFill' : 'heart'}
          size={14}
          color="background"
        />
      </TouchableOpacityBox>
    </AnimatedBox>
  );
};
