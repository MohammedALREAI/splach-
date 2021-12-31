import styled, { css } from 'styled-components';
import { General } from './styles.interface';



export interface ITypography extends Pick<General, 'padding' | 'color' | 'margin'> {
  fontSize?: number;
  weight?: string | number;
  decoration?: string;
}



export const Typography = styled('p')<ITypography>`

${({ color, margin, fontSize, weight, padding, decoration }) => css<ITypography>`
    color: ${color};
    display: inline-block;
    font-size: ${fontSize};
    font-weight: ${weight};
    margin: ${margin};
    padding: ${padding};
    text-decoration: ${decoration};

    `}
`;


Typography.defaultProps = {
  color: 'black',
};
