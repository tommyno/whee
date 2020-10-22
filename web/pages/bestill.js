import PropTypes from "prop-types";

import Seo from "utils/seo";

import { Section, Block, Flow } from "components/Layout";
import OrderBikeForm from "components/Form/OrderBikeForm";
import Footer from "components/Footer";
import Header from "components/Header";

const OrderPage = ({ firstName, lastName, email }) => {
  return (
    <>
      <Seo page={{ title: "Bestill sykkel" }} noindex nofollow />

      <Header />

      {/* Simple check to hide this page for others than direct link from email */}
      {!firstName && (
        <Section limitedWidth>
          <Block bottom={7}>
            <Flow>
              <h1>Beklager!</h1>
              <p>
                Denne siden er kun tilgjengelig for de med gyldig kø-nummer.
              </p>
              <p>
                Husk å bruke direktelenken fra e-posten dersom du har fått
                tilsendt dette.
              </p>
            </Flow>
          </Block>
        </Section>
      )}

      {firstName && (
        <article>
          <Section limitedWidth outer="firstSection">
            <Block bottom={7}>
              <h1 data-animate-in data-animation-order="1">
                Hei {firstName}!
              </h1>
            </Block>

            <p className="h2" data-animate-in data-animation-order="2">
              Nå har du endelig mulighet til å bestille din Whee!-sykkel.
            </p>
          </Section>

          <Section limitedWidth>
            <OrderBikeForm
              initialValues={{
                firstName,
                lastName,
                email
              }}
            />
          </Section>
        </article>
      )}

      <Footer />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { id = "" } = query;

  // Fetch customer data
  const url = `${process.env.NEXT_PUBLIC_SERVER}/api/user/order/${id}`;
  const response = await fetch(url);
  const result = await response.json();

  return {
    props: {
      ...result
    }
  };
}

OrderPage.defaultProps = {
  firstName: "",
  lastName: "",
  email: ""
};

OrderPage.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string
};

export default OrderPage;
