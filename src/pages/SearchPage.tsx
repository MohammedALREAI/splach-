import { Meta } from 'Hoc/Meta';
import React, { useEffect } from 'react';
import SearchLayout from 'Layouts/SearchLayout/SearchLayout';
import { useParams } from 'react-router-dom';
import { serchPHAOTO } from 'redux/photos/photos.actions';
import { TState } from 'Redux/Store';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { PhtosActions } from 'Redux/photos/photos.types';
interface Props {
  page?: string;
}



const SearchPage = () => {
   const { name } = useParams<{name:string}>();
 const dispatch = useDispatch<ThunkDispatch<TState, any, PhtosActions>>();
   const items = useSelector((state: TState) => state.photos.item.item);
const query = name;
  useEffect(() => {
    dispatch(serchPHAOTO(query));
  }, [dispatch]);
console.log(items, 'ghgggggg');
  return (
    <div>
      <Meta title={'search page'} />
      <SearchLayout title={name} ImageData={items} />
    </div>
  );
};

export default SearchPage;
