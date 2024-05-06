import Slider from 'react-slick';
import ProductCard from '@/components/ProductCard/ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"
import styles from './slider.module.css';

import imgSrc from '../../../public/tshirt.jpg';

type Product = {
  id: number;
  name: string;
  price: string;
  url: string;
  image: typeof imgSrc;
  variant: string;
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
          <div key={product.id} className={styles.productCardContainer}>
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              url={`product/${product.id}`}
              image={product.image}
              variant={product.variant}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageSlider;
