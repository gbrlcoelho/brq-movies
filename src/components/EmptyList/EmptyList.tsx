import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

import {EmptyListProps} from './EmptyListProps';

export const EmptyList = ({
  listItemName,
  loading,
  error,
  refresh,
}: EmptyListProps) => {
  let component = (
    <Text bold preset="paragraphMedium" color="gray3">
      Não há {listItemName}
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" marginBottom="s24" color="gray3">
          Não foi possível carregar {listItemName}
        </Text>
        <Button
          title="Recarregar"
          preset="outline"
          onPress={refresh}
          width="80%"
        />
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
};
