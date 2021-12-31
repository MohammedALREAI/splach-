import React from 'react';
import { Image } from '../widget/Image';
import { Row } from '../widget/Row';
import { ButtonWithIcons } from './ButtonF';

interface Props {
image?:string,
alt?:string,

}


export const CardItem = (props: Props) => {
    return (
        <Row >
            <Image src="https://images.unsplash.com/photo-1640753138783-feb605ed090b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt={'alt image'}/>
            <ButtonWithIcons width=''/>

        </Row>
    );
};
