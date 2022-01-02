import { useMediaQuery } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { getPhats } from 'Redux/photos/photos.actions';
import { GetItemsListsActions } from 'Redux/photos/photos.types';
import { TState } from 'Redux/Store';
import { itemData } from 'Utils/Constants';
import { Image, Layout } from './styled';
import InfiniteScroll from 'react-infinite-scroll-component';
import { isNamedTupleMember } from 'typescript';
import { CardItem } from 'Component/ItemCard/CardItem';

interface ImageType {
  img: string;
  title: string;
}


const MainLayout = () => {
  const isMeduim = useMediaQuery('(max-width: 950px)');
  const isSmall = useMediaQuery('(max-width: 650px)');
  const dispatch = useDispatch<ThunkDispatch<TState, any, GetItemsListsActions>>();
  const [page, setpage] = useState<number>(1);
   const items = useSelector((state:TState) => state.photos.items.item);






  useEffect(() => {
    // fetchPhotos(page);
    dispatch(getPhats(page));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  const handleScroll = () => {
    // if (window.innerHeight === 100) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 700) {
      // setpage(prev => prev + 1);
      setpage(page + 1);
    }
  };
// console.log('item phtos', items[0].cover_photo?.urls.thumb);


  return (
    <Layout variant="masonry" cols={isSmall ? 1 : isMeduim ? 2 : 3} gap={15}>

         {items.map((item) => (
           <>
           <CardItem item={item} key={item.id} />
        {/* <Image
          src={'https://images.unsplash.com/photo-1623852990731-472e0d1b047f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max?w=248&fit=crop&auto=format'}
          srcSet={'https://images.unsplash.com/photo-1623852990731-472e0d1b047f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max?w=248&fit=crop&auto=format&dpr=2 2x'}
          // alt={item.id}
          loading="lazy"
        /> */}
        </>
      ))}


    </Layout>
  );
};
export default MainLayout;
