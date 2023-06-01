import Item from './Item';

import styles from './index.scss';

function Header() {
  return (
    <ul className={styles.container}>
      <Item to="/about">ABOUT</Item>
      <Item to="/">POSTS</Item>
      <Item to="https://github.com/LAH1203" target="_blank">
        GITHUB
      </Item>
    </ul>
  );
}

export default Header;
