import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

import { Section, Flex } from "components/Layout";

import Logo from "components/Logo";

import styles from "./Header.module.scss";

const Header = () => {
  const [spinLogo, setSpinLogo] = useState(false);

  const logoClass = classNames({
    [styles.logoWrap]: true,
    [styles[`logoWrap-animated`]]: spinLogo
  });

  const startSpin = () => {
    if (spinLogo) {
      return;
    }
    setSpinLogo(true);
    setTimeout(() => {
      setSpinLogo(false);
    }, 1000);
  };

  return (
    <Section outer="small" noLimit>
      <Flex justify="spaceBetween">
        <div className={logoClass} onMouseEnter={() => startSpin()}>
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
  );
};

export default Header;
