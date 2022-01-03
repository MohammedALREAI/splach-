import { NavLinkA as NavLink } from '../widget/Nav/NavLinkA';
import logo from '../../logo.png';
import AutoComplete from 'Component/AutoComplete';
import { NavLinkWrapper, Logo } from 'Component/widget/Nav/NavLinkWrapper';
import styled from 'styled-components';
import { NavLinkCustom } from './header.style';
import { Row } from 'Component/widget/Row';


export const Header = ({}) => {
  return (
    <>
      <NavLinkWrapper>
        <NavLink>
          <Logo src={logo} alt="logo  image" />
        </NavLink>
        <NavLinkCustom>
          <AutoComplete
          width="770px"
            bR="20px"
             placeholder="Search..."
               name="autoComplete"
                    data={[]} />
        </NavLinkCustom>
        <Row JC="flex-start">
        <NavLinkCustom>EXplore</NavLinkCustom>
        <NavLinkCustom>advertise</NavLinkCustom>
        <NavLinkCustom>blog</NavLinkCustom>
        </Row>
      </NavLinkWrapper>
    </>
  );
};
