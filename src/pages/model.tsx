import { Button, Grid, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box } from '@mui/system';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect, useState } from 'react';
import IconButtons from 'Component/iconButton/iconButton';
import ModelBar from 'Component/modelBar/modelBar';
import SliderImage from 'Component/sliderImage/sliderImage';
import RelatedCollectinosCards from 'Component/relatedcollectionsCards/relatedCollectinosCards';
import Tags from 'Component/tags/tags';
import ImageDetails from 'Component/imageDetails/imageDetails';
import { PhtosShape } from '@types';
import { useDispatch, useSelector } from 'react-redux';
import { GetMyCureentIndex } from 'utils/CurreentIndex';
import { TState } from 'redux/Store';
import { ThunkDispatch } from 'redux-thunk';
import { GetItemsListsActions } from 'redux/photos/photos.types';
import { getPhats } from 'redux/photos/photos.actions';


interface Iprops{
isOpen:boolean;
item:any
}
export default function BasiModal({ item, isOpen }:Iprops) {
  const [open, setOpen] = React.useState(isOpen);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
console.log(item, 'opem');
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflow: 'auto', p: '25px 0', cursor: 'zoom-out' }}
      >
        <>
          <IconButtons children={<CloseIcon />} topLeft click={handleClose} />
          <IconButtons children={<ArrowBackIosNewIcon />} left />
          <IconButtons children={<ArrowForwardIosIcon />} right />

          <Grid
            item
            md={10}
            xs={12}
            sx={{
              backgroundColor: 'white',
              m: 'auto',
              borderRadius: '5px',
              overflow: 'hidden',
              cursor: 'default',
            }}
          >
            <ModelBar />
            <SliderImage />
            <ImageDetails />
            <Box sx={{ p: '0 10px' }}>
              <RelatedCollectinosCards />
              <Tags />
            </Box>
          </Grid>
        </>
      </Modal>
    </div>
  );
}
