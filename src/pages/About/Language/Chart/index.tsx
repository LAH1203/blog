import useBooleanWithCurrying from '@/hooks/useBooleanWithCurrying';

import styles from './index.scss';

const Chart = () => {
  const [isReactHover, changeIsReactHover] = useBooleanWithCurrying(false);
  const [isTypeScriptHover, changeIsTypeScriptHover] =
    useBooleanWithCurrying(false);
  const [isHTMLCSSJSHover, changeIsHTMLCSSJSHover] =
    useBooleanWithCurrying(false);

  return (
    <div className={styles.chart}>
      {isReactHover && (
        <div className={`${styles.description} ${styles.react}`}>React</div>
      )}
      {isTypeScriptHover && (
        <div className={`${styles.description} ${styles.typescript}`}>
          TypeScript
        </div>
      )}
      {isHTMLCSSJSHover && (
        <div className={`${styles.description} ${styles.HTMLCSSJS}`}>
          HTML·CSS·JS
        </div>
      )}

      <svg viewBox="-50 -50 300 300">
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#FCF8E8"
          strokeWidth="60"
          strokeDasharray={`${2 * Math.PI * 90 * 0.334} ${
            2 * Math.PI * 90 * 0.667
          }`}
          strokeDashoffset={2 * Math.PI * 90 * 0.334}
          onMouseOver={changeIsReactHover(true)}
          onMouseOut={changeIsReactHover(false)}
        />
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#94B49F"
          strokeWidth="60"
          strokeDasharray={`${2 * Math.PI * 90 * 0.667} ${2 * Math.PI * 90}`}
          strokeDashoffset={2 * Math.PI * 90 * 0.33}
          onMouseOver={changeIsHTMLCSSJSHover(true)}
          onMouseOut={changeIsHTMLCSSJSHover(false)}
        />
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#DF7861"
          strokeWidth="60"
          strokeDasharray={`${2 * Math.PI * 90 * 0.331} ${
            2 * Math.PI * 90 * 0.334
          }`}
          strokeDashoffset={2 * Math.PI * 90 * 0.33}
          onMouseOver={changeIsTypeScriptHover(true)}
          onMouseOut={changeIsTypeScriptHover(false)}
        />
      </svg>
    </div>
  );
};

export default Chart;
