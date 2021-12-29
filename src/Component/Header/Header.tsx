import { NavLinkA } from '../widget/Nav/NavLinkA'
import { NavLinkWrapper } from '../widget/Nav/NavLinkWrapper'
import { Image } from '../widget/Image'
import unSplash from '../../../public/unsplash.png'


export const Header = ({}) => {
    return (
        <>
        <NavLinkWrapper className= "NavLinkWrapper">
            <NavLinkA >Ahmad Saleh</NavLinkA>
            <NavLinkA >Ahmad Saleh</NavLinkA>
            <NavLinkA >Ahmad Saleh</NavLinkA>
        </NavLinkWrapper>
        </>
    )
}
