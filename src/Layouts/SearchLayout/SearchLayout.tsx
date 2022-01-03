import { PhtosShape } from '@types';
import { CardItem } from 'Component/ItemCard/CardItem';
import { Tags } from 'Component/Tabgs/Tags';

import { itemData } from 'utils/Constants';
import { Button, ButtonsRow, Layout, LayoutItem, Wrraper } from './styled';


interface Props{
  ImageData:any;
  title:string
}
const SearchLayout = ({ ImageData, title }: Props) => {
  return (
    <Wrraper>
       <h1>{title}</h1>
       {console.log(ImageData)}
      <ButtonsRow>

{/* {for (let index1 = 0; index1 < ImageData.length; index++) {
  for (let index = 0; index < ImageData[index].tags; index++) {
    const element = array[index];

  }
  const element = array[index];

} */}


{/* ImageData.length > 0 && ImageData.map((item:any) => (
  {item.tags.map((tag:any)=>
    <Tags title={tag.title} />

    )}
))} */}
       </ButtonsRow>
        <Layout>
{ImageData.length > 0 && ImageData.map((item:any) => (
  <CardItem item={item} />
))}


         {/* <LayoutItem />
         <LayoutItem />
         <LayoutItem />
         <LayoutItem />
         <LayoutItem />
         <LayoutItem />
         <LayoutItem />
         <LayoutItem /> */}
       </Layout>
    </Wrraper>
  );
};

export default SearchLayout;
