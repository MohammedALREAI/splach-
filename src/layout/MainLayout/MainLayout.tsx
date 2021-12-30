import { Image, Layout } from './styled'
interface ImageType{
    img: string;
    title: string
}
interface Props{
    images: ImageType[]
}

const MainLayout = ({ images }: Props) => {
    return (
          <Layout variant="masonry" cols={3} >
            {images.map((item) => (
                <Image
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
            ))}
          </Layout>
      )
}
export default MainLayout
