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
                        <a >freely-usable images.</a>
                    </UnsplashTitleSub>
                    <UnsplashTitleSub>
                    Powered by creators everywhere
                        </UnsplashTitleSub>
                    <AutoComplete bR='10px' width={''}/>
                    <UnsplashTitleSub>
                    Trinding:  <a>Map on api triding.</a>
                    </UnsplashTitleSub>
                    <Typography as={'p'}>Trinding: Map on api triding </Typography>
                </Container>
            </BannerSection>
        </div>
    );
};

export default Banner;
