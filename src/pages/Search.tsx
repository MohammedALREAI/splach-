import MainLayout from 'Layouts/MainLayout/MainLayout';
import SearchLayout from 'Layouts/SearchLayout/SearchLayout';
import React from 'react';
import { itemData } from '../utils/Constants';

const Search = () => {
  return (
    <>
      <SearchLayout title='gg' ImageData={[]} />
      <MainLayout />
    </>
  );
};

export default Search;
