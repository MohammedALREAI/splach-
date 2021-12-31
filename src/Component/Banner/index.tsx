import { BannerSection, Container, Typography } from './styled';
import AutoComplete from 'Component/AutoComplete';

const Banner = () => {
    return (
        <div>
            <BannerSection>
                <Container>
                    <Typography as="h1">Unsplash</Typography>

                    <Typography as={'p'}>
                        The internet’s source of
                        <Typography as={'a'}>freely-usable images.</Typography>
                    </Typography>
                    <Typography as={'b'}>Powered by creators everywhere</Typography>
                    <AutoComplete bR='10px'/>
                    <Typography as={'p'}>Trinding: Map on api triding </Typography>
                </Container>
            </BannerSection>
        </div>
    );
};

export default Banner;
