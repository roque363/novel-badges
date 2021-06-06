import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wavy}>
        <span style={{ animationDelay: `0.1s` }}>C</span>
        <span style={{ animationDelay: `0.2s` }}>a</span>
        <span style={{ animationDelay: `0.3s` }}>r</span>
        <span style={{ animationDelay: `0.4s` }}>g</span>
        <span style={{ animationDelay: `0.5s` }}>a</span>
        <span style={{ animationDelay: `0.6s` }}>n</span>
        <span style={{ animationDelay: `0.7s` }}>d</span>
        <span style={{ animationDelay: `0.8s` }}>o</span>
        <span style={{ animationDelay: `0.9s` }}>.</span>
        <span style={{ animationDelay: `1s` }}>.</span>
        <span style={{ animationDelay: `1.1s` }}>.</span>
      </div>
    </div>
  );
};

export default Loader;
