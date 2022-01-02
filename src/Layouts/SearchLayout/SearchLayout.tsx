import { itemData } from 'utils/Constants';
import { Button, ButtonsRow, Layout, LayoutContainer, LayoutItem } from './styled';

interface LayoutItemData {
  img: string,
  title: string
}
interface Props{
  ImageData: LayoutItemData[]
}
const SearchLayout = ({ ImageData }: Props) => {
  return (
    <LayoutContainer>
      <h1> Christmas tree : title</h1>
      <ButtonsRow>
      {
          // eslint-disable-next-line array-callback-return
          ImageData.map(it => <Button>{it.title}</Button>)
        }
      </ButtonsRow>

      <Layout>
        {/* Mapping on ImageData to show Item Layout */}
        {
          // eslint-disable-next-line array-callback-return
          ImageData.map(it => {
            console.log(it.title);
          })
        }
        <LayoutItem />
        <LayoutItem />
        <LayoutItem />
        <LayoutItem />
        <LayoutItem />
        <LayoutItem />
        <LayoutItem />
        <LayoutItem />
      </Layout>
    </LayoutContainer>
  );
};

export default SearchLayout;
