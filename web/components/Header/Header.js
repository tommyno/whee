import Link from "next/link";

import { Section, Flex } from "components/Layout";

import Logo from "components/Logo";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Section outer="xsmall" noLimit>
          <Flex justify="spaceBetween">
            <div className={styles.logoWrap}>
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            </div>
            <nav>
              <Link href="/sykkelen">
                <a className={styles.navListItem}>Sykkelen</a>
              </Link>
              <Link href="/tjenesten">
                <a className={styles.navListItem}>Tjenesten</a>
              </Link>
            </nav>
          </Flex>
        </Section>
      </header>
    </>
  );
};

export default Header;
