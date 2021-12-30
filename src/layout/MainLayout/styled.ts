import { ImageList } from '@mui/material'
import styled from 'styled-components'

export const Layout = styled(ImageList)`

    background-color: bisque;
    border: 1px solid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    margin: 40px auto;
    width: 80%;

    @media (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
        background-color: black;

    }
    @media (max-width: 650px){
        grid-template-columns: repeat(1, 1fr);
        background-color: red;
    }
   
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
`
