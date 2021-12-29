import { BannerSection, Container, Typography } from './styled'


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
                    <Typography as={'p'}>Trinding: Map on api triding </Typography>
                </Container>
            </BannerSection>
        </div>
    )
}

export default Banner
