import { keyframes } from 'styled-components';

export const ImageAnimation = keyframes`
  0%  {
    background-size: 150% 150%;
    transform: scale(1.0); 
      }
  
  50% {
    background-size: 200% 200%;
    transform: scale(1.22); 
    }
  70% {
    background-size: 110% 110%;
    transform: scale(1.15); 
    }
  
  100% {
    background-size: 100% 100%;
    transform: scale(1); 
  }
`;
