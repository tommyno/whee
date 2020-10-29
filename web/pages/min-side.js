import Seo from "utils/seo";

import { Section, Block, Flow } from "components/Layout";
import Footer from "components/Footer";
import Header from "components/Header";

const MyPage = () => {
  return (
    <>
      <Seo page={{ title: "Min side" }} noindex nofollow />

      <Header />

      <Section limitedWidth outer="firstSection">
        <Block bottom={7}>
          <Flow>
            <h1>Min side</h1>
            <p>Innhold kommer her</p>
          </Flow>
        </Block>
      </Section>

      <Footer />
    </>
  );
};

export default MyPage;
