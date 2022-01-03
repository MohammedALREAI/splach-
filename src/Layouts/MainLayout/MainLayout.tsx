import { useMediaQuery } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { getPhats } from '../../redux/photos/photos.actions';
import { GetItemsListsActions } from 'Redux/photos/photos.types';
import { TState } from 'Redux/Store';
import { Layout } from './styled';
import { CardItem } from 'Component/ItemCard/CardItem';

const MainLayout = () => {
  const isMeduim = useMediaQuery('(max-width: 950px)');
  const isSmall = useMediaQuery('(max-width: 650px)');
  const dispatch = useDispatch<ThunkDispatch<TState, any, GetItemsListsActions>>();
  const [page, setpage] = useState<number>(1);
  const items = useSelector((state: TState) => state.photos.items.item);

  useEffect(() => {
    dispatch(getPhats(page));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, page]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight) {
      setpage(page + 1);
    }
  }, [page, dispatch]);

  return (
    <Layout variant="masonry" cols={isSmall ? 1 : isMeduim ? 2 : 3} gap={15}>
      {items.map((item) => (
          <CardItem item={item} key={item.id} />
      ))}
    </Layout>
  );
};
export default MainLayout;
