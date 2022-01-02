import { BannerSection, Container, UnsplashTitle, UnsplashTitleSub } from './styled';
import AutoComplete from 'Component/AutoComplete';
import { Typography } from 'Component/widget/Typography';

const Banner = () => {
    return (
        <div>
            <BannerSection>
                <Container>
                    <UnsplashTitle>Unsplash</UnsplashTitle>

                    <UnsplashTitleSub>
                        The internet’s source of
                        <Typography as={'a'}>freely-usable images.</Typography>
                    </UnsplashTitleSub>
                    <Typography as={'b'}>Powered by creators everywhere</Typography>
                    <AutoComplete bR='10px' width='100%' />
                    <Typography as={'p'}>Trinding: Map on api triding </Typography>
                </Container>
            </BannerSection>
        </div>
    );
};

export default Banner;
