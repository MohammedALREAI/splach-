import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from 'Component/cardHeader/card';
// import { ButtonWithIcons } from 'Component/ItemCard/ButtonF';
import AddIcon from '@mui/icons-material/Add';
export default function ModelBar() {
  return (
    <AppBar position="static" color="default" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
      <Toolbar>
        <Card />
        {/* <ButtonWithIcons icon={<FavoriteIcon fontSize="small" />} /> */}
        {/* <ButtonWithIcons icon={<AddIcon />} /> */}
      </Toolbar>
    </AppBar>
  );
}
