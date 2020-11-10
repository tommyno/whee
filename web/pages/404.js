import Seo from "utils/seo";

import { Section, Block, Flow } from "components/Layout";
import Footer from "components/Footer";
import Header from "components/Header";

const ErrorPage = () => {
  return (
    <>
      <Seo page={{ title: "Denne siden finnes ikke - 404" }} noindex nofollow />

      <Header />

      <Section limitedWidth outer="firstSection">
        <Block bottom={7}>
          <Flow>
            <h1>Beklager!</h1>
            <h2>Denne siden finnes ikke...</h2>
            <p>
              Dersom du mener dette er en feil, gi oss et vink på{" "}
              <a href="mailto:hei@whee.no" className="link">
                hei@whee.no
              </a>{" "}
              så hjelper vi deg.
            </p>
            <img src="/images/404.png" alt="Mann på sykkel, mister hatt" />
          </Flow>
        </Block>
      </Section>

      {/* Hacky slugname to remove footer image */}
      <Footer slug="bestilt" />
    </>
  );
};

export default ErrorPage;
