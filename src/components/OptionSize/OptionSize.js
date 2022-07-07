import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';

const OptionSize = (props) => {
  return (
    <ul className={styles.choices}>
      {props.sizes.map((size) => (
        <li key={size.name}>
          <button type="button" className={size.name === props.currentSize ? styles.active : undefined} onClick={() => props.changeSize(size.name, size.additionalPrice)}>
            {size.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  changeSize: PropTypes.func.isRequired,
};

export default OptionSize;
