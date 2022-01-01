import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { getPhats } from 'Redux/photos/photos.actions';
import { GetItemsListsActions } from 'Redux/photos/photos.types';
import { TState } from 'Redux/Store';
import { itemData } from 'Utils/Constants';
import { Image, Layout } from './styled';
import InfiniteScroll from 'react-infinite-scroll-component';

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
    dispatch(getPhats(1));
  }, [dispatch, page]);

  return (
    <Layout variant="masonry" cols={isSmall ? 1 : isMeduim ? 2 : 3} gap={15}>
 <InfiniteScroll
          dataLength={10}
          next={() => setpage(prev => prev + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
         {items.map((item) => (
           <>
          <p>{item.id}</p>
        <Image
          src={'https://images.unsplash.com/photo-1638913660695-b490171d17c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODcxNzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MDk5NDYwMw&ixlib=rb-1.2.1&q=80&w=400?w=248&fit=crop&auto=format'}
          srcSet={'https://images.unsplash.com/photo-1638913660695-b490171d17c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODcxNzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MDk5NDYwMw&ixlib=rb-1.2.1&q=80&w=400?w=248&fit=crop&auto=format&dpr=2 2x'}
          alt={item.id}
          loading="lazy"
        />
        </>
      ))}
        </InfiniteScroll>

    </Layout>
  );
};
export default MainLayout;
