
import styled from 'styled-components'
import bannerBa from '../../assets/background.jpg'

export const BannerSection = styled.div`
    
    align-items: center;
    background: url(${bannerBa}) no-repeat center center/cover ;  
    display: flex;
    height: 90vh;
    justify-content: space-around;
    width: 100%
`

export const Container = styled.div`
    background: #1e212168;
    border-radius: 10px; 
    margin: 0 auto;
    padding: 0 15px
    width: 65%;

`
export const Typography = styled.p`
    color: white;
`
