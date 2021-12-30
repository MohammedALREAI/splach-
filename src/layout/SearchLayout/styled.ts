import styled from "styled-components";

export const Layout= styled.div`
    margin: 40px auto;
    width: 80%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    background-color: bisque;

    @media (max-width: 700px){
        grid-template-columns: repeat(2, 1fr);
    }
   
`
export const LayoutItem= styled.div`
    height: 200px;
    background-color: aqua;

    @media (max-width: 700px){
        background-color: red;
        height: 150px;
        background-color: aqua;
    }
    @media (max-width: 800px){
        background-color: red;
        height: 170px;
        background-color: aqua;
    }

`