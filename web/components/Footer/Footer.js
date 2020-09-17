import Link from "next/link";

import { Section, Grid, Flow } from "components/Layout";

const Footer = () => {
  return (
    <Section outer="none" inner="medium" color="peach">
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
  );
};

export default Footer;
