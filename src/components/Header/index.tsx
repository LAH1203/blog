import Item from './Item';

import Logo from '@/assets/small-logo.gif';

import styles from './index.scss';

function Header() {
  return (
    <div className={styles.container}>
      <a className={styles['logo-wrapper']} href="/">
        <img className={styles.logo} src={Logo} alt="로고" />
      </a>
      <ul className={styles.nav}>
        <Item to="/about">ABOUT</Item>
        <Item to="/posts">POSTS</Item>
        <Item to="https://github.com/LAH1203" target="_blank">
          GITHUB
        </Item>
      </ul>
    </div>
  );
}

export default Header;
