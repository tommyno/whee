import Flex from "components/Flex";
import Logo from "components/Logo";

import styles from "./Header.module.scss";

const Topnav = () => {
  return (
    <div className={styles.topNav}>
      <Flex justify="spaceBetween">
        <div className={styles.logoWrap}>
          <Logo />
        </div>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>Hvordan virker det</li>
          <li className={styles.navListItem}>Sett deg på venteliste</li>
        </ul>
      </Flex>
    </div>
  );
};

export default Topnav;
