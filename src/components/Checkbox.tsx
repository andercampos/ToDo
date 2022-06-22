import { Check } from 'phosphor-react';
import styles from './Checkbox.module.css';

export const Checkbox = (props: any) => {
  const className = props.checked
    ? `${styles.checkbox} ${styles.checked}`
    : styles.checkbox;

  return (
    <label className={styles.container}>
      <input
        className={styles.hidden}
        defaultChecked={props.checked}
        onClick={props.onClick}
      />
      <div className={className}>
        <Check size={14} weight="bold" />
      </div>
    </label>
  );
};
