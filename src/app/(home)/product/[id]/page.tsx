'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { getProductDetails } from '@/lib/actions/actions';
import styles from './page.module.css';

import Button from '@/components/Button/Button';
import Line from '@/components/Line/Line';
import Loader from '@/components/Loader/Loader';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';

import useCart from '@/lib/hooks/useCart';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  createdAt: string;
  updatedAt: string;
  media: string[];
  colors: string[];
  sizes: string[];
  tags: string[];
  collections: CollectionType;
}

interface CollectionType {
  createdAt: string;
  description: string;
  image: string;
  slug: string;
  title: string;
  updatedAt: string;
  products: string[];
}

const Product = () => {
  const params = useParams<{ id: string }>();
  const { id } = params;

  const cart = useCart();
  // id: string;
  // title: string;
  // description: string;
  // size: string;
  // color: string;
  // quantity: number;
  // price: number;
  // image: string;

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const data = await getProductDetails(id);
    setProduct(data);
    setSelectedSize(data.sizes[0])
    setSelectedColor(data.colors[0])
  }

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity: number = parseInt(event.target.value);
    setQuantity(newQuantity);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    // const selectedProduct = {
    //   id: parseInt(id),
    //   name: product?.title,
    //   size: selectedSize,
    //   quantity,
    //   price: product?.price,
    //   variant: selectedColor,
    // };

    // addToCart(selectedProduct);
  }

  const handleSelectedPhoto = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedPhoto: string = event.target.value;
  }

  if (!product) {
    return <Loader />;
  }

  console.log(product.colors[0], 'color')
  console.log(product.sizes, 'size')
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.rightCol}>
          <div className={styles.imageContainer}>
            <Image
              src={product?.media[0]}
              alt="Product Image"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>

          {/* <div className={styles.imagesRow}>
            <button className={styles.transparentButton} onClick={() => handleSelectedPhoto}>
              <Image
                src={imgSrc}
                alt="Product Image"
                className={styles.miniImage}
              />
            </button>

            <button className={styles.transparentButton} onClick={() => handleSelectedPhoto}>
              <Image
                src={imgSrc}
                alt="Product Image"
                className={styles.miniImage}
              />
            </button>

            <button className={styles.transparentButton} onClick={() => handleSelectedPhoto}>
              <Image
                src={imgSrc}
                alt="Product Image"
                className={styles.miniImage}
              />
            </button>

            <button className={styles.transparentButton} onClick={() => handleSelectedPhoto}>
              <Image
                src={imgSrc}
                alt="Product Image"
                className={styles.miniImage}
              />
            </button>

            <button className={styles.transparentButton} onClick={() => handleSelectedPhoto}>
              <Image
                src={imgSrc}
                alt="Product Image"
                className={styles.miniImage}
              />
            </button>
          </div> */}
        </div>

        <div className={styles.leftCol}>
          <div className={styles.details}>
            <h1>{product?.title}</h1>
            <h4>${product?.price}</h4>
            <p></p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.dropdownSection}>
                <p>Select a color:</p>
                <select onChange={event => setSelectedColor(event.target.value)} value={selectedColor}>
                  {Array.isArray(product?.colors) && product.colors.length > 0 && product?.colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>

              <div className={styles.dropdownSection}>
                <p>Select a size:</p>
                <select onChange={event => setSelectedSize(event.target.value)} value={selectedSize}>
                  {Array.isArray(product?.sizes) && product.sizes.length > 0 && product?.sizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div className={styles.dropdownSection}>
                <p>Quantity:</p>
                <input
                  type="number"
                  placeholder="Quantity"
                  name="quantity"
                  value={quantity}
                  min={1}
                  onChange={handleQuantityChange}
                />
              </div>

              <Button
                type="submit"
                variant="outlined"
                text="Add to Cart"
                onClick={() => {
                  cart.addItem({
                    item: {
                      id: product.id,
                      title: product.title,
                      description: product.description,
                      price: product.price,
                      media: product.media[0],
                    },
                    quantity,
                    color: selectedColor,
                    size: selectedSize,
                  })
                }}
              />
            </form>
          </div>

          <p className={styles.smallPrint}>*Free Shipping over $50</p>

          <Line />

          <div className={styles.infoSection}>
            <h3>Details</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          </div>

          <Line />

          <div className={styles.infoSection}>
            <h3>Shipping</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          </div>

          <Line />

          <div className={styles.infoSection}>
            <h3>Returns</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
        </div>
      </div>

      <RelatedProducts id={product?.id} />
    </div>
  );
}

export default Product;
