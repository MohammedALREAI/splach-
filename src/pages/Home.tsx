import React from 'react';
import Banner from 'Component/Banner';
import MainLayout from 'Layouts/MainLayout/MainLayout';
import { itemData } from 'utils/Constants';

const Home = () => {
  return (
    <>
      <Banner />
      <MainLayout images={itemData} /> 
       {/*MainLayout takes array of the ImageCard  */}
    </>
  );
};

export default Home;
