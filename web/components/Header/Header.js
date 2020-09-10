import Section from "components/Section";
import Flex from "components/Flex";
import Logo from "components/Logo";

import styles from "./Header.module.scss";

const Topnav = () => {
  return (
    <Section outer="small">
      <Flex justify="spaceBetween">
        <div className={styles.logoWrap}>
          <Logo />
        </div>
        <nav>
          <a className={styles.navListItem} href="#">
            Hvordan virker det
          </a>
          <a className={styles.navListItem} href="#">
            Sett deg på venteliste
          </a>
        </nav>
      </Flex>
    </Section>
  );
};

export default Topnav;
