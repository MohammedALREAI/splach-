import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from '../widget/Button';
import { Row } from '../widget/Row';

interface Props {
me?:string,
icon?:ReactNode,
width:string
}


export const CustomButon = styled.button<Props>`
background-color: #ffffff; 
color: #767676; 
font-size: 14px;
font-weight: 500;
height: 40px;
margin: 0px;
padding:4px
padding: 0px 11px;
width: ${(props) => (props.width ? props.width : '50px')};
border : 1px solid #767676;
border-radius : 4px;

`;

<<<<<<< HEAD
export const ButtonWithIcons = ({ icon }: Props) => {
    return (
        <Row maxWidth="">

<CustomButomm type="button" title="Like photo" className="">
            {icon}
</CustomButomm>
=======
export const ButtonWithIcons = ({ icon, width }: Props) => {
    return (
        <Row maxWidth="">

<CustomButon type="button" title="Like photo" className="" width={width}>
            {icon}
</CustomButon>
>>>>>>> 5c115b4661241b87568976fc8f72b2abfb60bf63
        </Row>
    );
};
