import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";

import sanity from "settings/client";
import Seo from "utils/seo";

import { Section, Block } from "components/Layout";
import Footer from "components/Footer";
import Header from "components/Header";
import CardGrid from "components/CardGrid";
import ProductCard from "components/ProductCard";

import CartContext, { CartProvider } from "context/cart";

const Products = ({ page }) => {
  const { title = "", intro = "", productList = [] } = page;
  const cart = React.useContext(CartContext);

  return (
    <>
      <Seo page={{ title: "Ekstrautstyr" }} noindex nofollow />
      <Header />
      <Section limitedWidth outer="firstSection">
        <Block bottom={7}>
          {title && (
            <h1 data-animate-in data-animation-order="1">
              {title}
            </h1>
          )}
        </Block>
        {intro && (
          <p className="h2" data-animate-in data-animation-order="2">
            {intro}
          </p>
        )}
      </Section>

      <Section inner="none" limitedWidth>
        <CardGrid>
          {productList.map((item) => (
            <ProductCard data={item} key={item._key} />
          ))}
        </CardGrid>
      </Section>

      <Section inner="none" limitedWidth>
        <h2>Handlekurv</h2>
        {cart.state.map(({ title: itemTitle, quantity, price, id }) => (
          <p key={id}>
            {quantity} x {itemTitle}, {price * quantity},-
          </p>
        ))}
      </Section>

      <Footer />
    </>
  );
};
// Get data for this particular page based on slug
const sanityQuery = `*[_type == "products" && slug.current == "ekstrautstyr"]{
	title,
  intro,
  productList,
  seo
}[0]`;

export async function getServerSideProps(ctx) {
  const { cookie = "" } = ctx.req.headers;

  // Verify user
  const url = `${process.env.BASEURL}/api/user/verify`;
  const response = await fetch(url, {
    headers: {
      cookie
    }
  });

  // Not authenticated
  // Client side
  if (response.status === 401 && !ctx.req) {
    Router.replace("/login");
  }

  // Not authenticated
  // Server side
  if (response.status === 401 && ctx.req) {
    ctx.res?.writeHead(302, {
      Location: `${process.env.BASEURL}/login`
    });
    ctx.res?.end();
  }

  // All good - fetch data
  const page = await sanity.fetch(sanityQuery);

  return {
    props: {
      page
    }
  };
}

Products.propTypes = {
  page: PropTypes.object.isRequired
};

const Wrapper = (props) => {
  return (
    <CartProvider>
      <Products {...props} />
    </CartProvider>
  );
};
export default Wrapper;
