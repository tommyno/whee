import Link from "next/link";

import { Section, Flex } from "components/Layout";
import Logo from "components/Logo";
import MobileMenu from "./MobileMenu";

import styles from "./Header.module.scss";

const DesktopMenu = () => {
  return (
    <>
      <header className={styles.header}>
        <Section outer="xsmall" noLimit>
          <Flex justify="spaceBetween" align="end">
            <div className={styles.logoWrap}>
              <Link href="/">
                <a title="Til forsiden">
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
              <Link href="/fix">
                <a className={styles.navListItem}>Vask og service</a>
              </Link>

              <a
                className={styles.navListItem}
                href="https://www.wheestore.no/"
                target="_blank"
                rel="noreferrer"
              >
                Nettbutikk
              </a>
            </nav>
          </Flex>
        </Section>
      </header>
      <div className={styles.headerShadow} />
      <div className={styles.headerBox} />
    </>
  );
};

const Header = () => {
  return (
    <>
      <DesktopMenu />
      <MobileMenu />
    </>
  );
};

export default Header;
