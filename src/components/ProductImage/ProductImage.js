import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = (props) => {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} alt={props.fullProductName} src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
    </div>
  );
};

ProductImage.propTypes = {
  fullProductName: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductImage;
