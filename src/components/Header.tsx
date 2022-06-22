import Logo from '../assets/logo.svg';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logotipo ToDo" />
    </header>
  );
};
