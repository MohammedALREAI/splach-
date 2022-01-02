import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { getPhats } from '../../redux/photos/photos.actions';
import { GetItemsListsActions } from 'Redux/photos/photos.types';
import { TState } from 'Redux/Store';
import { itemData } from 'Utils/Constants';
import { Image, Layout } from './styled';
// import InfiniteScroll from 'react-infinite-scroll-component';

interface ImageType {
  img: string;
  title: string;
}

const MainLayout = () => {
  const isMeduim = useMediaQuery('(max-width: 950px)');
  const isSmall = useMediaQuery('(max-width: 650px)');
  const dispatch = useDispatch<ThunkDispatch<TState, any, GetItemsListsActions>>();
  const [page, setpage] = useState<number>(1);
  const [hasMore, sethasMore] = useState<boolean>(true);
  const items = useSelector((state: TState) => state.photos.items.item);

  useEffect(() => {
    dispatch(getPhats(page));
  }, [dispatch, page]);

  console.log('items------------->', items);


//   const fetchMoreData = () => {
//     setTimeout(() => {
//     setpage((perv) => perv + 1);
//     }, 500);
// };
  return (
    <Layout variant="masonry" cols={isSmall ? 1 : isMeduim ? 2 : 3} gap={15}>
      <div
        id="scrollableDiv"
        style={{
          height: 300,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        {/*Put the scroll bar always on the bottom*/}
        {/* <InfiniteScroll
          dataLength={10}
          next={fetchMoreData}
          style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          inverse={true} //
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
{ console.log('items------------->222222222', items)}
          {Array(10).fill(0).map((_, index) => (
            <div key={index}>div - SLJDKSJDKSJKJK</div>
          ))}
        </InfiniteScroll> */}
      </div>
    </Layout>
  );
};
export default MainLayout;
