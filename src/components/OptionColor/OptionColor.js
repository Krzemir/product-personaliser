import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = (props) => {
  return (
    <ul className={styles.choices}>
      {props.colors.map((color) => (
        <li key={color}>
          <button type="button" className={clsx(styles['color' + color.charAt(0).toUpperCase() + color.slice(1)], color === props.currentColor && styles.active)} onClick={() => props.changeColor(color)} />
        </li>
      ))}
    </ul>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired,
};
export default OptionColor;
