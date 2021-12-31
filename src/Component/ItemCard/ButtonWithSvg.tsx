import React, { ReactNode } from 'react';
import { ButtonWithImage, ButtonWithImageWrapperSVG } from './CardItem.styles';

interface Props {
icon:ReactNode | React.SVGProps<SVGSVGElement>,
onClick?:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void

}


export const ButtonWithIcons = ({ icon, onClick }: Props) => {
    return (
      <ButtonWithImage>
                <ButtonWithImageWrapperSVG onClick={onClick}>
                 {icon}
                </ButtonWithImageWrapperSVG>
              </ButtonWithImage>
    );
};
