import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from '../widget/Button';
import { Row } from '../widget/Row';

interface Props {
me?:string,
icon?:ReactNode
}


export const CustomButomm = styled('button')`
background-color: #ffffff; 
color: #111111; 
font-size: 14px;
font-weight: 500;
height: 32px;
line-height: 30px;
margin: 0px;
padding:4px
padding: 0px 11px;
width: 39px;
background-color: #fff;
    border-color: #d1d1d1;
    color: #767676;

`;

export const ButtonWithIcons = (props: Props) => {
    return (
        <Row maxWidth="">

<CustomButomm type="button" title="Like photo" className="">
            {'icon'}
</CustomButomm>
        </Row>
    );
};
