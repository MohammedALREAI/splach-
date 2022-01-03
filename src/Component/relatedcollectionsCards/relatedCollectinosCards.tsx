import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import RelatedCollectionsCard from 'Component/relatedCollectionCard/relatedCollectionsCard';
import React from 'react';

export default function RelatedCollectinosCards() {
  return (
    <Box>
      <Typography
        variant="body1"
        sx={{ color: 'Related tags', fontSize: '18px', padding: '20px 0' }}
      >
        Related collections
      </Typography>
      <Grid container spacing={0}>
        <RelatedCollectionsCard />
        <RelatedCollectionsCard />
        <RelatedCollectionsCard />
      </Grid>
    </Box>
  );
}
