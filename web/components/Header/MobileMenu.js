import React, { useState } from "react";
import Link from "next/link";

import { Block, Flex } from "components/Layout";
import Button from "components/Button";

import Logo from "components/Logo";

import styles from "./Header.module.scss";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClose = () => {
    console.log("Lukk meny");
    setIsMobileMenuOpen(false);
  };

  const handleOpen = () => {
    console.log("Åpne meny");
    setIsMobileMenuOpen(true);
  };

  const CloseButton = () => {
    return (
      <button className={styles.menuButton} type="button" onClick={handleClose}>
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.8027 2L2.00007 24.8027"
            stroke="#FFFCF4"
            strokeWidth="4"
          />
          <path
            d="M24.8027 25L2.00008 2.19734"
            stroke="#FFFCF4"
            strokeWidth="4"
          />
        </svg>
      </button>
    );
  };

  const OpenButton = () => {
    return (
      <button type="button" onClick={handleOpen}>
        <span className={styles.menuButtonText}>Meny</span>
        <svg
          width="31"
          height="22"
          viewBox="0 0 31 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.332031"
            y="18.333"
            width="30.668"
            height="3.66667"
            fill="#373737"
          />
          <rect
            x="0.332031"
            y="9.16699"
            width="30.668"
            height="3.66667"
            fill="#373737"
          />
          <rect x="0.332031" width="30.668" height="3.66667" fill="#373737" />
        </svg>
      </button>
    );
  };

  return (
    <header className={styles.headerMobileWrap}>
      {/* Show normal meny header */}
      {!isMobileMenuOpen && (
        <Flex justify="spaceBetween">
          <div className={styles.logoWrapMobileBar}>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <OpenButton />
        </Flex>
      )}

      {/* Show open mobile menu */}
      {isMobileMenuOpen && (
        <>
          <div className={styles.headerMobile}>
            <CloseButton />
            <nav className={styles.mobileFlex}>
              <div className={styles.logoWrapMobile}>
                <Link href="/">
                  <a>
                    <Logo color="#fffcf4" />
                  </a>
                </Link>
              </div>

              <div>
                <div>
                  <Link href="/sykkelen">
                    <a className={styles.navListItemMobile}>Sykkelen</a>
                  </Link>
                </div>
                <div>
                  <Link href="/tjenesten">
                    <a className={styles.navListItemMobile}>Tjenesten</a>
                  </Link>
                </div>
                <Block top={6}>
                  <Button link="/forhandsbestill" menu>
                    <span className="text-button">Forhåndsbestill nå!</span>
                  </Button>
                </Block>
              </div>

              <div>
                <div>
                  <Link href="/hvem-er-whee">
                    <a className={styles.navListItemMobile}>Hvem er Whee!?</a>
                  </Link>
                </div>
                <div>
                  <Link href="/personvern-og-cookies">
                    <a className={styles.navListItemMobile}>
                      Personvern og cookies
                    </a>
                  </Link>
                </div>
              </div>

              <div>
                <p>
                  <a href="mailto:hei@whee.no" className="link-underline">
                    hei@whee.no
                  </a>
                </p>
                <p>
                  <a href="tel:22120068">22 12 00 68</a>
                </p>

                <Block top={6}>
                  <div className={styles.some}>
                    <a
                      href="https://www.instagram.com/wheebike/"
                      title="Whee! på Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/instagram.png" alt="Instagram ikon" />
                    </a>
                    <a
                      href="https://www.facebook.com/wheebike/"
                      title="Whee! på Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/facebook.png" alt="Facebook ikon" />
                    </a>
                    <a
                      href="https://www.youtube.com/c/wheebike"
                      title="Whee! på YouTube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/youtube.png" alt="Youtube ikon" />
                    </a>
                  </div>
                </Block>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default MobileMenu;
