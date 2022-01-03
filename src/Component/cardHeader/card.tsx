import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

export default function Card() {
  return (
    <CardHeader
      sx={{ flexGrow: 5, padding: '0' }}
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
  );
}
