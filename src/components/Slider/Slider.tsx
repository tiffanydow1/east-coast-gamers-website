import Slider from 'react-slick';
import ProductCard from '@/components/ProductCard/ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"
import styles from './slider.module.css';

type Product = {
  _id: string;
  id: string;
  title: string;
  price: number;
  url: string;
  media: string[];
  variant: string;
  category: string;
  collections: string[];
  colors: string[];
  createdAt: string;
  description: string;
  sizes: string[];
  tags: string[];
  updatedAt: string;
}

type ProductListProps = {
  products: Product[];
}

const ImageSlider = ({ products }: ProductListProps) => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product._id} className={styles.productCardContainer}>
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              url={`/product/${product.id}`}
              images={product.media}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageSlider;
