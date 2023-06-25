import { useParams } from 'react-router-dom';

import Snackbar from '@/components/Snackbar';
import useSnackbar from '@/hooks/useSnackbar';
import usePost from '@/hooks/usePost';

import Header from './Header';
import Navigator from './Navigator';
import Utterances from './Utterances';
import styles from './index.scss';

const minUnit = 2000;

const Post = () => {
  const { id } = useParams();

  const { isSnackbarShowing, showSnackbar } = useSnackbar();
  const { title, content, date } = usePost({
    id: Number(id),
    isSnackbarShowing,
    showSnackbar,
  });

  return (
    <div className={styles.container}>
      <Header
        title={title}
        date={date}
        minutes={
          content.length < minUnit ? 1 : Math.round(content.length / minUnit)
        }
      />
      <article
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Utterances />
      <Navigator id={Number(id)} />
      <Snackbar isSnackbarShowing={isSnackbarShowing}>
        클립보드에 복사되었습니다.
      </Snackbar>
    </div>
  );
};

export default Post;
