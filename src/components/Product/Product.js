import styles from './Product.module.scss';

//import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  console.log(props);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentAdditionalPrice, setCurrentAdditionalPrice] = useState(props.sizes[0].additionalPrice);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);

  let fullProductName = '';

  const changeSize = (sizeName, additionalPrice) => {
    setCurrentSize(sizeName);
    setCurrentAdditionalPrice(additionalPrice);
    const newPrice = props.basePrice + currentAdditionalPrice;
    setCurrentPrice(newPrice);
  };

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
    Price: ${currentPrice}
    Color: ${currentColor}
    Size: ${currentSize}`);
  };

  return (
    <article className={styles.product}>
      <ProductImage currentColor={currentColor} fullProductName={fullProductName} name={props.name} changeColor={changeColor} colors={props.colors} />

      {/*       <div className={styles.imageContainer}>
        <img className={styles.image} alt={formatName(props.name)} src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div> */}
      <div>
        <header>
          <h2 className={styles.name}>{formatName(props.name)}</h2>
          <span className={styles.price}>Price: {currentPrice} $</span>
        </header>

        <ProductForm getBasketData={getBasketData} currentSize={currentSize} changeSize={changeSize} sizes={props.sizes} colors={props.colors} changeColor={changeColor} currentColor={currentColor} />

        {/*         <form onSubmit={getBasketData}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li key={size.name}>
                  <button type="button" className={size.name === currentSize ? styles.active : undefined} onClick={() => changeSize(size.name, size.additionalPrice)}>
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => (
                <li key={color}>
                  <button type="button" className={clsx(styles['color' + color.charAt(0).toUpperCase() + color.slice(1)], color === currentColor && styles.active)} onClick={() => changeColor(color)} />
                </li>
              ))}
            </ul>
          </div>
          <Button type="submit" className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form> */}
      </div>
    </article>
  );
};

//Product.propTypes = { products: PropTypes.object.isRequired };

export default Product;
