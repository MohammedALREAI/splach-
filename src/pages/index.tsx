import { Meta } from 'Hoc/Meta';
import React from 'react';



interface Props {
  page?: string;
}

export const index = (props: Props) => {
  return <div> <Meta title={'HOME PAGE'} /> </div>;
};
