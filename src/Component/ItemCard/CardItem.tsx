import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPhats } from '../../redux/photos/photos.actions';
import { Row, Column, Image, Typography } from '../widget/styles';
import { ButtonWithIcons } from './ButtonWithSvg';
import { ButtonWedgiewrapperBottom, ButtonWithImage, ButtonWithImageWrapper, ButtonWithImageWrapperText, ImageContainerContent, ImageLogo, UserNmae, WrapperImage, WrapperImageColumn, WrapperTopItem } from './CardItem.styles';
interface Props {
  imageBackGround?: string;
  imageIconsAlt?: string;
  imageIcons?: string;
}

const LikeSvg = (
  <svg width="32" height="32" viewBox="0 0 32 32" version="1.1" aria-hidden="false">
    <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path>
  </svg>
);
const PlusSvg = (
  <svg width="32" height="32" viewBox="0 0 32 32" version="1.1" aria-hidden="false">
    <path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path>
  </svg>
);

export const CardItem = ({ imageBackGround, ...props }: Props) => {
  const [show, setshow] = useState<boolean>(false);
  // const handleClick = () => {
  //   console.log('clicked');
  // };
  // const [page, setPage] = useState<number>(1);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //  dispatch(getPhats(1));
  //  dispatch(getPhats(2));
  // }, [dispatch]);
  return (
    <WrapperImage>
      <ImageContainerContent imag="https://images.unsplash.com/photo-1640767549157-7cbdb00ab8a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      onMouseEnter={() => setshow(true)} onMouseLeave={() => setshow(false)}>
        {show && (
          <WrapperImageColumn>
            <WrapperTopItem>
              <ButtonWithIcons icon={LikeSvg}/>
              <ButtonWithIcons icon={PlusSvg} />
            </WrapperTopItem>
            <ButtonWedgiewrapperBottom>
              <ButtonWithImageWrapper>
                <ImageLogo
                  src="https://images.unsplash.com/profile-1638212144583-a96726613b23image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                  className="imag_log"
                />
                <ButtonWithImageWrapperText>
                  <UserNmae className="userNmae">ssssssss</UserNmae>
                </ButtonWithImageWrapperText>
              </ButtonWithImageWrapper>
              <ButtonWithIcons icon={<svg
                    width="32"
                    height="32"
                    className="icons_svg"
                    viewBox="0 0 32 32"
                    version="1.1"
                    aria-hidden="false"
                  >
                    <path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path>
                  </svg>} />
            </ButtonWedgiewrapperBottom>
          </WrapperImageColumn>
        )}
      </ImageContainerContent>
    </WrapperImage>
  );
};
