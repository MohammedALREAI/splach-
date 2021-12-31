import { SliderComponent } from 'Component/Slider/Slider';
import { CardItem } from './Component/ItemCard/CardItem';
import Providers from './Provider';

function App() {
  return (
    <Providers>
      <CardItem
        imageBackGround={
          'https://images.unsplash.com/photo-1640767514388-eef1b79eb036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=200&q=60'
        }
        imageIcons={
          'https://images.unsplash.com/profile-1638212144583-a96726613b23image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
        }
      />
    </Providers>
  );
}

export default App;
