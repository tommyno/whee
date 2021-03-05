/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import Link from "next/link";

import useBodyFreeze from "hooks/useBodyFreeze";

import { Block, Flex } from "components/Layout";
import Button from "components/Button";
import Logo from "components/Logo";

import styles from "./Header.module.scss";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const CloseButton = () => {
    return (
      <button
        className={styles.menuButton}
        type="button"
        onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
      >
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
      <button
        type="button"
        onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
      >
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

  const OpenMenu = () => {
    useBodyFreeze();
    return (
      <>
        <div className={styles.headerMobile}>
          <CloseButton />
          <nav className={styles.mobileFlex}>
            <div className={styles.logoWrapMobile}>
              <Link href="/">
                {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
                <a
                  title="Til forsiden"
                  role="link"
                  onClick={() => {
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                  }}
                >
                  <Logo color="#fffcf4" />
                </a>
              </Link>
            </div>

            <div data-animate-down data-animation-order="1">
              <Button link="/forhandsbestill" menu>
                <span
                  className="text-button"
                  onClick={() => {
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                  }}
                >
                  Forhåndsbestill nå!
                </span>
              </Button>
            </div>

            <div>
              <div data-animate-down data-animation-order="2">
                <Link href="/sykkelen">
                  <a
                    className={styles.navListItemMobile}
                    onClick={() => {
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                    }}
                  >
                    Sykkelen
                  </a>
                </Link>
              </div>
              <div data-animate-down data-animation-order="3">
                <Link href="/tjenesten">
                  <a
                    className={styles.navListItemMobile}
                    onClick={() => {
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                    }}
                  >
                    Tjenesten
                  </a>
                </Link>
              </div>
              <div data-animate-down data-animation-order="4">
                <Link href="/fix">
                  <a
                    className={styles.navListItemMobile}
                    onClick={() => {
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                    }}
                  >
                    Vask og service
                  </a>
                </Link>
              </div>
              <div data-animate-down data-animation-order="5">
                <Link href="/min-side">
                  <a
                    className={styles.navListItemMobile}
                    onClick={() => {
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                    }}
                  >
                    Min side
                  </a>
                </Link>
              </div>

              <div data-animate-down data-animation-order="6">
                <Link href="/hvem-er-whee">
                  <a
                    className={styles.navListItemMobile}
                    onClick={() => {
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                    }}
                  >
                    Hvem er Whee!?
                  </a>
                </Link>
              </div>
              <div data-animate-down data-animation-order="7">
                <Link href="/personvern-og-cookies">
                  <a
                    className={styles.navListItemMobile}
                    onClick={() => {
                      setIsMobileMenuOpen(!isMobileMenuOpen);
                    }}
                  >
                    Personvern og cookies
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <p data-animate-down data-animation-order="8">
                <a href="mailto:hei@whee.no" className="link-underline">
                  hei@whee.no
                </a>
              </p>
              <p data-animate-down data-animation-order="9">
                <a href="tel:22120068">22 12 00 68</a>
              </p>

              <Block top={5} data-animate-in data-animation-order="9">
                <div className={styles.some}>
                  <a
                    href="https://www.instagram.com/wheebike/"
                    title="Whee! på Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/instagram.svg" alt="Instagram ikon" />
                  </a>
                  <a
                    href="https://www.facebook.com/wheebike/"
                    title="Whee! på Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/facebook.svg" alt="Facebook ikon" />
                  </a>
                  <a
                    href="https://www.youtube.com/c/wheebike"
                    title="Whee! på YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/youtube.svg" alt="Youtube ikon" />
                  </a>
                </div>
              </Block>
            </div>
          </nav>
        </div>
      </>
    );
  };

  return (
    <>
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
        {isMobileMenuOpen && <OpenMenu />}
      </header>
      <div className={styles.headerShadowMobile} />
      <div className={styles.headerBoxMobile} />
    </>
  );
};

export default MobileMenu;
