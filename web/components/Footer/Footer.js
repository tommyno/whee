import Link from "next/link";
import classNames from "classnames";

import { Section, Grid, Flow } from "components/Layout";

import styles from "./Footer.module.scss";

const Footer = ({ frontpage }) => {
  const footerClass = classNames({
    [styles.footer]: true,
    [styles[`footer-frontpage`]]: frontpage
  });

  return (
    <footer className={footerClass}>
      {frontpage && (
        <img
          src="/images/footer-parade.png"
          alt=""
          className={styles.footerImage}
        />
      )}

      {!frontpage && (
        <img
          src="/images/footer-parade-slim.png"
          alt=""
          className={styles.footerImage}
        />
      )}
      <Section outer="none" inner="medium" color="red">
        <Grid>
          <nav>
            <Flow>
              <p>
                <Link href="/sykkelen">
                  <a>Sykkelen</a>
                </Link>
              </p>
              <p>
                <Link href="/tjenesten">
                  <a>Tjenesten</a>
                </Link>
              </p>
              <p>
                <Link href="/fortroppen">
                  <a>Sett meg på venteliste</a>
                </Link>
              </p>
            </Flow>
          </nav>

          <nav>
            <Flow>
              <p>
                <Link href="/hvem-er-whee">
                  <a>Hvem er Whee!?</a>
                </Link>
              </p>
              <p>
                <Link href="/personvern-og-cookies">
                  <a>Personvern og cookies</a>
                </Link>
              </p>
            </Flow>
          </nav>

          <Flow>
            <p>
              <a href="mailto:hei@whee.no">hei@whee.no</a>
            </p>
            <p>
              <a href="tel:22222222">22 22 22 22</a>
            </p>
            <p>[Insta], [Youtube], [Facebook]</p>
          </Flow>
        </Grid>
      </Section>
    </footer>
  );
};

export default Footer;
