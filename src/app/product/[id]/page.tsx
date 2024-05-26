'use client'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';
import Line from '@/components/Line/Line';
import Button from '@/components/Button/Button';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';

import imgSrc from '../../../../images/tshirt.jpg';

const colorOptions = ['Red', 'Blue', 'Green'];

const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const Product = () => {
  const params = useParams();
  const { id } = params;

  // const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('Red');
  const [selectedSize, setSelectedSide] = useState('');
  const [quantity, setQuantity] = useState<number>(1);

  // useEffect(() => {
  //   if (id) {
  //     fetch(`/api/products/${id}`)
  //       .then(response => response.json())
  //       .then(data => setProduct(data))
  //       .catch(error => console.error('Error fetching product data:', error));
  //   }
  // }, [id]);

  const handleSizeChange = () => {
    console.log('inside handle size change')
  }

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity: number = parseInt(event.target.value);
    setQuantity(newQuantity);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('inside handle submit');

    // CALL ADD TO CART FROM CART CONTEXT
    // id, name, size, quantity, price, variant
    const selectedProduct = {
      id,
      // name: product.name,
      size: selectedSize,
      quantity,
      //price: product.price,
      variant: selectedColor,
    };
  }

  const handleSelectedPhoto = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedPhoto: string = event.target.value;
    console.log('selecting new photo:', selectedPhoto);
  }

  // if (!product) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.rightCol}>
          <div className={styles.imageContainer}>
            <Image
              src={imgSrc}
              alt="Product Image"
              className={styles.image}
            />
          </div>

          <div className={styles.imagesRow}>
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
          </div>
        </div>

        <div className={styles.leftCol}>
          <div className={styles.details}>
            <h1>Product Name</h1>
            <h4>$55</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.colorSelector}>
                <p>Select a color:</p>
                {colorOptions.map(color => (
                  <div key={color} className={styles.radioButton}>
                    <input
                      id={`color-${color}`}
                      key={color}
                      type="radio"
                      value={color}
                      onChange={() => setSelectedColor(color)}
                    />
                    <label htmlFor={`color-${color}`} className={selectedColor === color ? styles.checked : ''} style={{ backgroundColor: color }}></label>
                  </div>
                ))}
              </div>


              <select>
                {sizeOptions.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>

              <input
                type="number"
                placeholder="Quantity"
                name="quantity"
                value={quantity}
                min={1}
                onChange={handleQuantityChange}
              />

              <Button type="button" variant="outlined" text="Add to Cart" />
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

      <RelatedProducts />
    </div>
  );
}

export default Product;
