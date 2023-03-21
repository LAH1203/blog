import styles from './index.scss';

interface ItemProps {
  to: string;
  target?: string;
  children: string;
}

const Item = ({ to, target, children }: ItemProps) => {
  return (
    <li>
      <a href={to} target={target} className={styles.item}>
        {children}
      </a>
    </li>
  );
};

export default Item;
