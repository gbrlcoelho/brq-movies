import React from 'react';

import {Box, Card} from '@components';

import {CardGroupProps} from './CardGroupProps';

export const CardGroup = ({movie}: CardGroupProps) => {
  return (
    <Box marginTop="s32" gap="s16">
      <Box flexDirection="row" justifyContent="space-between">
        <Card label="Popularidade" value={movie.popularity} icon="heart" />
        <Card label="Nota" value={movie.voteAverage} icon="star" />
      </Box>
      <Box flexDirection="row" justifyContent="space-between">
        <Card label="Lançamento" value={movie.releaseDate} icon="calendar" />
        <Card label="Votos" value={movie.voteCount} icon="thumbsUp" />
      </Box>
    </Box>
  );
};
