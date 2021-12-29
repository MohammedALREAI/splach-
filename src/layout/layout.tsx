import { FC } from 'react';
import { MainContainer } from '../Component/widget/styles';

//-----------------------|| hOW  TO  USED  IT  ||-----------------------//

export const Layout: FC = ({ children }) => {
  return (
    <MainContainer>
      {/* <Navbar/> */}
      {children}
    </MainContainer>
  );
};
