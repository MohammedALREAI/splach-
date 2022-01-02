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

export const ButtonWithIcons = ({ icon, width }: Props) => {
    return (
        <Row maxWidth="">

<CustomButon type="button" title="Like photo" className="" width={width}>
            {icon}
</CustomButon>
        </Row>
    );
};
