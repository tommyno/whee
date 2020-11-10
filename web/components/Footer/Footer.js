import Link from "next/link";
import classNames from "classnames";
import PropTypes from "prop-types";

import { Section, Grid, Flow } from "components/Layout";
import Button from "components/Button";

import styles from "./Footer.module.scss";

const Footer = ({ frontpage, slug }) => {
  const footerClass = classNames({
    [styles.footer]: true,
    [styles[`footer-frontpage`]]: frontpage
  });

  const isHiddenImage = slug === "bestilt";

  return (
    <>
      {/* Footer image for frontpage */}
      {frontpage && (
        <img
          src="/images/footer-tall.png"
          alt=""
          className={styles.footerImageFrontpage}
        />
      )}
      <footer className={footerClass}>
        {/* Footer image for other pages */}
        {!frontpage && !isHiddenImage && (
          <img
            src="/images/footer-slim.png"
            alt=""
            className={styles.footerImage}
          />
        )}

        <Section outer="none" inner="footer" color="red">
          <Grid>
            <nav>
              <Flow>
                <p>
                  <Button link="/forhandsbestill" menu>
                    Forhåndsbestill nå
                  </Button>
                </p>
              </Flow>
            </nav>

            <nav>
              <Flow>
                <p>
                  <Link href="/sykkelen">
                    <a className="link-underline">Sykkelen</a>
                  </Link>
                </p>
                <p>
                  <Link href="/tjenesten">
                    <a className="link-underline">Tjenesten</a>
                  </Link>
                </p>
                <p>
                  <Link href="/hvem-er-whee">
                    <a className="link-underline">Hvem er Whee!?</a>
                  </Link>
                </p>
                <p>
                  <Link href="/personvern-og-cookies">
                    <a className="link-underline">Personvern og cookies</a>
                  </Link>
                </p>
              </Flow>
            </nav>

            <Flow>
              <p>
                <a href="mailto:hei@whee.no" className="link-underline">
                  hei@whee.no
                </a>
              </p>
              <p>
                <a href="tel:22120068">22 12 00 68</a>
              </p>

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
                  href="https://www.youtube.com/channel/UCK1aM7Xid0V_Jr0c3rZ_LLg"
                  title="Whee! på YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/youtube.svg" alt="Youtube ikon" />
                </a>
              </div>
            </Flow>
          </Grid>
        </Section>
      </footer>
    </>
  );
};

Footer.defaultProps = {
  frontpage: false,
  slug: ""
};

Footer.propTypes = {
  frontpage: PropTypes.bool,
  slug: PropTypes.string
};

export default Footer;
