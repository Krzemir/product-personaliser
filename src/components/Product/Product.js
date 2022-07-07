import styles from './Product.module.scss';

import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useMemo } from 'react';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentAdditionalPrice, setCurrentAdditionalPrice] = useState(props.sizes[0].additionalPrice);
  //const [currentPrice, setCurrentPrice] = useState(props.basePrice);

  let fullProductName = '';

  const changeSize = (sizeName, additionalPrice) => {
    setCurrentSize(sizeName);
    setCurrentAdditionalPrice(additionalPrice);
    // const newPrice = props.basePrice + currentAdditionalPrice;
    //setCurrentPrice(newPrice);
  };

  const getPrice = () => {
    return props.basePrice + currentAdditionalPrice;
  };

  /*   const getPrice = useMemo(() => {
    return props.basePrice + currentAdditionalPrice;
  }, [currentAdditionalPrice]); */

  const changeColor = (color) => {
    setCurrentColor(color);
  };

  const formatName = (name) => {
    const productName = name.charAt(0).toUpperCase() + name.slice(1) + ' shirt';

    fullProductName = productName;
    return productName;
  };

  formatName(props.name);

  const getBasketData = (e) => {
    e.preventDefault();

    console.log(`Summary 
    =============== 
    Name: ${fullProductName}
    Price: ${getPrice()}
    Color: ${currentColor}
    Size: ${currentSize}`);
  };

  return (
    <article className={styles.product}>
      <ProductImage currentColor={currentColor} fullProductName={fullProductName} name={props.name} changeColor={changeColor} colors={props.colors} />

      <div>
        <header>
          <h2 className={styles.name}>{formatName(props.name)}</h2>
          <span className={styles.price}>Price: {getPrice()} $</span>
        </header>

        <ProductForm getBasketData={getBasketData} currentSize={currentSize} changeSize={changeSize} sizes={props.sizes} colors={props.colors} changeColor={changeColor} currentColor={currentColor} />
      </div>
    </article>
  );
};

export default Product;
