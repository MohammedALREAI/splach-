import styled from 'styled-components';


export const LayoutContainer = styled.div`
    margin: 40px auto;
    width: 90%;
`;

export const Layout = styled.div`
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
   

    @media (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);

    }
`;

export const ButtonsRow = styled.button`
    background: none;
    border: none;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    &&::-webkit-scrollbar{
        display: none;
    }
`;

export const Button = styled.button`
    border: 1px solid gray;
    border-radius: 3px;
    color: gray;
    cursor: pointer;
    margin-right: 10px ;
    padding: 10px 30px;
    & :hover{
        background-color: red;
        border: 1px solid black;
        color: black;
    }
`;

export const LayoutItem = styled.div`
    border: 1px solid black;
    height: 200px;

    @media (max-width: 1100px){
        height: 180px;
    }
    @media (max-width: 700px){
        height: 150px;
    }
    
`;
