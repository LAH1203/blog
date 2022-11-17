import styles from './index.scss';

function Hits() {
  const hitsUrl = `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${window.location.href}&count_bg=%23009FFF&title_bg=%235D5D5D&title=visited&edge_flat=false`;

  return <img className={styles.image} src={hitsUrl} alt="방문자 수" />;
}

export default Hits;
