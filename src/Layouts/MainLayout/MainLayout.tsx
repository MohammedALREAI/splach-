import { useMediaQuery } from '@mui/material';
import { Image, Layout } from './styled';
import { CardItem } from '../../Component/ItemCard/CardItem';

interface ImageType {
  img: string;
  title: string;
}
interface Props {
  images: ImageType[];
}

const MainLayout = ({ images }: Props) => {
  const isMeduim = useMediaQuery('(max-width: 950px)');
  const isSmall = useMediaQuery('(max-width: 650px)');

  return (
    <>
      <Layout variant="masonry" cols={isSmall ? 1 : isMeduim ? 2 : 3} gap={15}>
        {/*
          Below can you make mapping on the photos
        */}
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />

        {/* {images.map((item) => (
          <Image
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        ))} */}
      </Layout>
    </>
  );
};
export default MainLayout;
