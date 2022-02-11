import { useResponsive } from 'hooks';
import Navbar from './Navbar';
import TabBar from './TabBar';
import styles from './basicLayout.module.scss';

function BasicLayout(props) {
  const { isDesktop } = useResponsive();

  return (
    <>
      <Navbar />
      <div className={styles.root}>{props.children}</div>
      {!isDesktop && <TabBar />}
    </>
  );
}

export default BasicLayout;
