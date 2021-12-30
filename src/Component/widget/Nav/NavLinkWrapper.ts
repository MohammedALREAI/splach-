import styled from 'styled-components'
import { Row } from '../Row'


console.log('navWrapper')
export const NavLinkWrapper = styled('nav')`
  background-color: #fff;
  display: flex;
  left: 0;
  padding-left: 10px;
  padding-right: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`
export const Logo = styled('img')`
  height: 34px;
  margin-top: 6px;
  width: 31px;
`




/*
export interface ITypography extends Pick<General, 'padding' | 'color' | 'margin'> {
  fontSize?: number;
  weight?: string | number;
  decoration?: string;
}



export const Typography = styled('p')<ITypography>

${({ color, margin, fontSize, weight, padding, decoration }) => css<ITypography>
    color: ${color};
    display: inline-block;
    font-size: ${fontSize};
    font-weight: ${weight};
    margin: ${margin};
    padding: ${padding};
    text-decoration: ${decoration};

    }
;


Typography.defaultProps = {
  color: 'red',
};

*/
