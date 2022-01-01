import React from 'react';
import Banner from 'Component/Banner';
import MainLayout from 'Layouts/MainLayout/MainLayout';
// import { itemData } from 'utils/Constants';
import { Meta } from 'Hoc/Meta';

const Home = () => {
  return (
    <>
    <Meta title={'HOME PAGE'} />
      <Banner />
      <MainLayout />
    </>
  );
};

export default Home;
