import PropTypes from "prop-types";

import Seo from "utils/seo";

import { Section, Block, Flow } from "components/Layout";
import Footer from "components/Footer";
import Header from "components/Header";

const Unsubscribe = ({ updated }) => {
  return (
    <>
      <Seo page={{ title: "Avbestill" }} noindex nofollow />

      <Header />

      <Section limitedWidth>
        <Block bottom={7}>
          {updated && (
            <Flow>
              <h1>Takk for beskjeden</h1>
              <h2>
                Du har nå gitt fra deg plassen i køen, og en annen lykkelig
                syklist rykker frem.
              </h2>
              <p>
                Dersom du mener du gjorde dette ved en feil, gi oss et vink på{" "}
                <a href="mailto:hei@whee.no" className="link">
                  hei@whee.no
                </a>{" "}
                så snart som mulig, så hjelper vi deg.
              </p>
            </Flow>
          )}
          {!updated && (
            <Flow>
              <h1>Beklager, noe gikk galt...</h1>
              <h2>Vi kunne ikke finne ditt kundenummer.</h2>
              <p>
                Dersom du mener dette er en feil, gi oss et vink på{" "}
                <a href="mailto:hei@whee.no" className="link">
                  hei@whee.no
                </a>{" "}
                så hjelper vi deg.
              </p>
            </Flow>
          )}
        </Block>
      </Section>

      <Footer />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { id = "" } = query;

  let updated = false;

  // Update customer status to inactive
  const url = `${process.env.NEXT_PUBLIC_SERVER}/api/user/unsubscribe/${id}`;
  const response = await fetch(url);

  // Customer is found and dupdated
  if (response.ok) {
    updated = true;
  }

  return {
    props: {
      updated
    }
  };
}

Unsubscribe.propTypes = {
  updated: PropTypes.bool.isRequired
};

export default Unsubscribe;
