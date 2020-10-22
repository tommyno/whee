import Seo from "utils/seo";

import { Section, Block, Flow } from "components/Layout";
import Footer from "components/Footer";
import Header from "components/Header";

const OrderPage = () => {
  return (
    <>
      <Seo page={{ title: "Denne siden finnes ikke - 404" }} noindex nofollow />

      <Header />

      <Section limitedWidth>
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
          </Flow>
        </Block>
      </Section>

      <Footer />
    </>
  );
};

export default OrderPage;
