import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import BasicButtons from 'Component/Button/Button';

export default function Tags() {
  return (
    <Box sx={{ p: '20px 0 ' }}>
      <Typography
        variant="body1"
        sx={{ color: 'Related tags', fontSize: '18px', padding: '20px 0' }}
      >
        Related tags
      </Typography>
      <BasicButtons to="/">one</BasicButtons>
      <BasicButtons to="/">two</BasicButtons>
      <BasicButtons to="/">two</BasicButtons>
    </Box>
  );
}
