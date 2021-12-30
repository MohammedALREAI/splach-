import styled from 'styled-components'
import { Row } from '../Row'


console.log('navWrapper')
export const NavLinkWrapper = styled(Row)`
    align-items: center;
    background-color: red;
    display: flex;
    flex: 1;
    height: 50px;
    justify-content: center;
    list-style: none;
    li:not(:last-child) {
    margin-right: 26px;
    }
    li:last-child {
    margin-left: auto;
    }
    button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    }
    @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
        padding: 12px;
        margin: 0 !important;
    }
    }

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
