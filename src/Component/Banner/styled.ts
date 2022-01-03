import styled from 'styled-components';
import Image from '../../assets/background.jpg';

export const BannerSection = styled.div`
    
    align-items: center;
    background: url(${Image}) no-repeat center center/cover ;  
    display: flex;
    height: 90vh;
    justify-content: space-around;
    width: 100%
`;

export const Container = styled.div`
    /* background: #1e212168; */
    border-radius: 10px; 
    margin: 0 auto;
    padding: 0 15px;
    width: 65%;
`;
export const UnsplashTitle = styled.h1`
color: #ffffff; 
font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
font-size: 46px;
font-weight: 700;
height: 52px;
line-height: 55.2px;`;
export const UnsplashTitleSub = styled.h4`

color: #ffffff; 
font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
font-size: 22px;
font-weight: 400;
height: 29px;
line-height: 28.8px;
margin: 16px 0px 0px;
margin-bottom: 12px;
    margin-top: 16px;
 a {

    font-weight: 400;
    padding-left:10px ;
    text-decoration: underline;
    text-decoration-skip-ink: auto;
    transition: color .1s ease-in-out,
    opacity .1s ease-in-out;
}
`;
