import { NavLinkA } from '../widget/Nav/NavLinkA';
import { Logo, NavLinkWrapper } from '../widget/Nav/NavLinkWrapper';
import logo from '../../logo.png';
import AutoComplete from 'Component/AutoComplete';


export const Header = ({}) => {
    return (
        <>
        <NavLinkWrapper>
      <NavLinkA>
      <Logo src={logo} />
      </NavLinkA>
      <NavLinkA>
        <AutoComplete width="1500px" bR="2" />
      </NavLinkA>
    </NavLinkWrapper>
        </>
    );
};
