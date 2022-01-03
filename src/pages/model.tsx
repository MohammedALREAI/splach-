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

const w = {
  id: 'vCf2vSYcFls',
  created_at: '2021-12-07T16:54:06-05:00',
  updated_at: '2022-01-02T01:22:08-05:00',
  promoted_at: null,
  width: 3840,
  height: 2160,
  color: '#d973c0',
  blur_hash: 'LQLdwB10ITo4-mNGs;s.M{aztRn,',
  description: null,
  alt_description: 'cryptocurrency',
  urls: {
    raw: 'https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?ixid=MnwyODcxNzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MTE2NzAxMg&ixlib=rb-1.2.1',
    full: 'https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyODcxNzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MTE2NzAxMg&ixlib=rb-1.2.1&q=85',
    regular:
      'https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODcxNzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MTE2NzAxMg&ixlib=rb-1.2.1&q=80&w=1080',
    small:
      'https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODcxNzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MTE2NzAxMg&ixlib=rb-1.2.1&q=80&w=400',
    thumb:
      'https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODcxNzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MTE2NzAxMg&ixlib=rb-1.2.1&q=80&w=200',
  },
  links: {
    self: 'https://api.unsplash.com/photos/vCf2vSYcFls',
    html: 'https://unsplash.com/photos/vCf2vSYcFls',
    download:
      'https://unsplash.com/photos/vCf2vSYcFls/download?ixid=MnwyODcxNzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MTE2NzAxMg',
    download_location:
      'https://api.unsplash.com/photos/vCf2vSYcFls/download?ixid=MnwyODcxNzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0MTE2NzAxMg',
  },
  categories: [],
  likes: 54,
  liked_by_user: false,
  current_user_collections: [],
  sponsorship: {
    impression_urls: [
      'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=9606385&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
    ],
    tagline: 'Designed to evolve. Built to empower',
    tagline_url:
      'https://tezos.com/?utm_campaign=_evergreen_contextual_reach_gl_&utm_source=&utm_medium=&utm_content=contextual_image_unsplash_v1_T1714',
    sponsor: {
      id: 'JpoSTNq74MM',
      updated_at: '2022-01-02T16:00:42-05:00',
      username: 'tezos',
      name: 'Tezos',
      first_name: 'Tezos',
      last_name: null,
      twitter_username: 'tezos',
      portfolio_url: 'https://tezos.com/',
      bio: 'Tezos is a self-upgradable and energy-efficient Proof of Stake blockchain with a proven record of security and scalability. Tezos seamlessly adopts innovations without disruption. For more information, please visit tezos.com.',
      location: null,
      links: {
        self: 'https://api.unsplash.com/users/tezos',
        html: 'https://unsplash.com/@tezos',
        photos: 'https://api.unsplash.com/users/tezos/photos',
        likes: 'https://api.unsplash.com/users/tezos/likes',
        portfolio: 'https://api.unsplash.com/users/tezos/portfolio',
        following: 'https://api.unsplash.com/users/tezos/following',
        followers: 'https://api.unsplash.com/users/tezos/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1634227720022-77e396999fc8image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1634227720022-77e396999fc8image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1634227720022-77e396999fc8image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 0,
      total_photos: 24,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: null,
        portfolio_url: 'https://tezos.com/',
        twitter_username: 'tezos',
        paypal_email: null,
      },
    },
  },
  topic_submissions: {},
  user: {
    id: 'JpoSTNq74MM',
    updated_at: '2022-01-02T16:00:42-05:00',
    username: 'tezos',
    name: 'Tezos',
    first_name: 'Tezos',
    last_name: null,
    twitter_username: 'tezos',
    portfolio_url: 'https://tezos.com/',
    bio: 'Tezos is a self-upgradable and energy-efficient Proof of Stake blockchain with a proven record of security and scalability. Tezos seamlessly adopts innovations without disruption. For more information, please visit tezos.com.',
    location: null,
    links: {
      self: 'https://api.unsplash.com/users/tezos',
      html: 'https://unsplash.com/@tezos',
      photos: 'https://api.unsplash.com/users/tezos/photos',
      likes: 'https://api.unsplash.com/users/tezos/likes',
      portfolio: 'https://api.unsplash.com/users/tezos/portfolio',
      following: 'https://api.unsplash.com/users/tezos/following',
      followers: 'https://api.unsplash.com/users/tezos/followers',
    },
    profile_image: {
      small:
        'https://images.unsplash.com/profile-1634227720022-77e396999fc8image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
      medium:
        'https://images.unsplash.com/profile-1634227720022-77e396999fc8image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
      large:
        'https://images.unsplash.com/profile-1634227720022-77e396999fc8image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
    },
    instagram_username: null,
    total_collections: 0,
    total_likes: 0,
    total_photos: 24,
    accepted_tos: true,
    for_hire: false,
    social: {
      instagram_username: null,
      portfolio_url: 'https://tezos.com/',
      twitter_username: 'tezos',
      paypal_email: null,
    },
  },
};

export default function BasiModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

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
