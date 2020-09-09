import Block from "components/Block";
import Container from "components/Container";
import Flex from "components/Flex";
import Logo from "components/Logo";

import styles from "./Header.module.scss";

const Topnav = () => {
  return (
    <Container>
      <Block top={7} bottom={7} responsive>
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
      </Block>
    </Container>
  );
};

export default Topnav;
