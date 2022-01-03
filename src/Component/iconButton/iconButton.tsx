import IconButton from '@mui/material/IconButton';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  right?: boolean;
  left?: boolean;
  topLeft?: boolean;
  click?: any;
}

const STYLE: any = {
  position: 'fixed',
  color: 'white',
  transform: 'translate(-50%,-50%)',
  zIndex: '-1',
};

export default function IconButtons(props: Props): JSX.Element {
  return (
    <IconButton
      onClick={props.click}
      sx={{
        ...STYLE,
        left: props.left ? '5vw' : props.topLeft ? '2vw' : '95vw',
        top: props.topLeft ? '2vw' : '50vh',
      }}
    >
      {props.children}
    </IconButton>
  );
}
