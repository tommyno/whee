import PropTypes from "prop-types";

import sanity from "settings/client";

import Seo from "utils/seo";

import CmsBlock from "components/CmsBlock";
import HeaderMedia from "components/HeaderMedia";
import { Section, Block, Flow } from "components/Layout";
import OrderBikeForm from "components/Form/OrderBikeForm";
import Footer from "components/Footer";
import Header from "components/Header";

const OrderPage = ({ page = {}, user = {} }) => {
  const { firstName = "", lastName = "", email = "" } = user;
  const { intro = "", content = [], headerMedia = [] } = page;

  return (
    <>
      <Seo page={page} />

      <Header />

      {/* Simple check to hide this page for others than direct link from email */}
      {!firstName && (
        <Section outer="firstSection" limitedWidth>
          <Block bottom={7}>
            <Flow>
              <h1>Beklager!</h1>
              <p>
                Denne siden er kun tilgjengelig for de med et gyldig kø-nummer.
              </p>
              <p>
                Bruk direktelenken fra e-posten dersom du har fått tilsendt
                dette.
              </p>
            </Flow>
          </Block>
        </Section>
      )}

      {firstName && (
        <article>
          <Section outer="firstSection" limitedWidth>
            <Block bottom={7}>
              <h1 data-animate-in data-animation-order="1">
                Hei {firstName}!
              </h1>
            </Block>

            {intro && (
              <p className="h2" data-animate-in data-animation-order="2">
                {intro}
              </p>
            )}
          </Section>

          {!!headerMedia.length && (
            <HeaderMedia
              data={headerMedia}
              data-animate-in
              data-animation-order="3"
            />
          )}

          {content.map((item) => (
            <CmsBlock data={item} key={item._key} />
          ))}

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

// Get data for this particular page based on slug
const sanityQuery = `*[_type == "page" && slug.current == "bestill"]{
	title,
  intro,
  content[]{
    ...,
    "faq": title, faq[]->{_id, title, richText, "category": category[]->{title}}
  },
  headerMedia,
  seo
}[0]`;

export async function getServerSideProps({ query }) {
  const { id = "" } = query;

  // Fetch customer data
  const url = `${process.env.BASEURL}/api/user/order/${id}`;
  const response = await fetch(url);
  let result = {};
  if (response.ok) {
    result = await response.json();
  }
  const page = await sanity.fetch(sanityQuery);

  return {
    props: {
      page,
      user: {
        ...result
      }
    }
  };
}

OrderPage.defaultProps = {
  user: {}
};

OrderPage.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string
  }),
  page: PropTypes.object.isRequired
};

export default OrderPage;
