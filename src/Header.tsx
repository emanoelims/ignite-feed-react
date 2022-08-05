import logo from './assets/logo.svg';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}><img src={logo} alt="Logo Ignite Feed"/> Ignite Feed</h1>
    </header>
  );
}

export default Header;
