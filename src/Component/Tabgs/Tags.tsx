import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

interface Props {
    title:string,
    onClick?:()=>void
 }

const TagsStyle = styled(Button)`
border: "1px solid #d1d1d1";
 borderRadius: "5px";
  overflow: "hidden";
   textAlign: "center";
    transition: "border-color .1s ease-in-out";
     width: "145px";
    
`;

export const Tags = ({ title, onClick }:Props) => {
    return <TagsStyle onClick={onClick}>{title}</TagsStyle>;
};
