import Link from "next/link";

import { Section, Flex } from "components/Layout";

import Logo from "components/Logo";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <Section outer="small">
      <Flex justify="spaceBetween">
        <div className={styles.logoWrap}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <nav>
          <Link href="/fortroppen">
            <a className={styles.navListItem}>Hvordan virker det</a>
          </Link>
          <Link href="/fortroppen">
            <a className={styles.navListItem}>Meld interesse</a>
          </Link>
        </nav>
      </Flex>
    </Section>
  );
};

export default Header;
