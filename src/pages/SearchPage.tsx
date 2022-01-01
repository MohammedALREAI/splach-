import { Meta } from 'Hoc/Meta';
import React from 'react';

interface Props {
  page?: string;
}



const SearchPage = () => {
  return (
    <div>
      <Meta title={'search page'} />
{console.log('start')}
    </div>
  );
};

export default SearchPage;
