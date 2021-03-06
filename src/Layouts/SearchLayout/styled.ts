import styled from 'styled-components';

export const Layout = styled.div`
    background-color: bisque;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    margin: 40px auto;
    width: 80%;

    @media (max-width: 700px){
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const LayoutItem = styled.div`
    background-color: aqua;
    height: 200px;

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
`;
