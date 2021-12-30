import { ImageList } from "@mui/material";
import styled from "styled-components";

export const Layout= styled(ImageList)`

    margin: 40px auto;
    width: 80%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: bisque;
    border: 1px solid;

    @media (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
        background-color: black;

    }
    @media (max-width: 650px){
        grid-template-columns: repeat(1, 1fr);
        background-color: red;
    }
   
`

export const Image= styled.img`
    width: 100%;
    height: 100%;
`