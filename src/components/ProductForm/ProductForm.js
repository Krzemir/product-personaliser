import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
//import clsx from 'clsx';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = (props) => {
  return (
    <form onSubmit={props.getBasketData}>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize sizes={props.sizes} currentSize={props.currentSize} changeSize={props.changeSize} />
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor colors={props.colors} currentColor={props.currentColor} changeColor={props.changeColor} />
      </div>
      <Button type="submit" className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  getBasketData: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  changeSize: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductForm;
