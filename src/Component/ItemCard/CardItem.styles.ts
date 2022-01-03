import { Row } from 'Component/widget/Row';
import { Typography } from 'Component/widget/Typography';
import styled from 'styled-components';

export const WrapperImage = styled('div')`  
  cursor: pointer;
    height: 250px;
    margin: 10px;
    position: relative;
    text-align: center;
    width: auto;
  
`;
export const Img = styled('img')`
  background-position: center;
  
    object-fit: contain;
    width: 100%;
`;

export const ButtonWedgiewrapperBottom = styled('div')`  
  align-items: center;
  display: flex;
  justify-content: space-between;
  pointer-events: auto;
  transition: opacity 0.1s ease-in-out, visibility 0.1s ease-in-out;
`;
export const WrapperImageColumn = styled('div')`  
bottom: calc(100%);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
position: absolute;
    right: calc(5%);
    transitionDuration: 300ms;
   
transitionProperty: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;

  width: 91%;

&:hover {
    backgroundColor:rgba(14, 14, 14, 0.07);
  transform: -0.25rem;

transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transitionDelay: 150ms;
}
`;

export const WrapperTopItem = styled('div')`  

  align-items: center;
  display: flex;
  justify-content: flex-end;
`;
export const ImageLogo = styled('img')`  
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 2rem;
  justify-content: center;
  padding: 2px;
  width: 2rem;
`;
export const UserNmae = styled(Typography)`  

  color: #767676;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica,
    Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20.25px;
  margin: 0px;
  padding: 0px;
  padding-left: 10px;
transition: color 0.1s ease-in-out, opacity 0.1s ease-in-out;

`;

interface IImageContainerContent{
  imag:string
}
export const ImageContainerContent = styled('div')<IImageContainerContent>`  
  background-image: url(${props => props.imag});

  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  min-width: 228px;

  objectFit: cover;
  padding: 18px;
  width: 100%;
`;

export const ButtonWithImage = styled('div')`  
  align-items: center;
  border-radius: 1px;
  display: flex;
  justify-content: center;
  line-height: 30px;

  margin: 0px;
  max-width: 39px;
  padding: 10px;
`;


export const ButtonWithImageWrapper = styled('div')`  

  align-items: center;
  display: flex;
  justify-content: center;
`;
export const ButtonWithImageWrapperText = styled('div')`  


  align-items: center;
  color: #767676;
  display: flex;

  flex-direction: column;
  text-decoration-skip-ink: auto;
  transition: color 0.1s ease-in-out, opacity 0.1s ease-in-out;
`;

export const ButtonWithImageWrapperSVG = styled('button')`  
  align-items: center;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 3px;
  color: #767676;
  display: flex;
  fontSize: 14px;
  fontWeight: 500;
  height: 32px;
  justifyContent: center;
  lineHeight: 30px;
  margin: 0px;
  padding: 0 11px;
  width: 40px;
`;
export const ButtonWithImageWrapperIconSVG = styled('svg')`  

  color: #fff;
  fill: #767676;
  top: -1px;
  width: 18px;
`;

// .ButtonWithSvg {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
