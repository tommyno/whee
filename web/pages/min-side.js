import PropTypes from "prop-types";

import Seo from "utils/seo";

import { Section, Block, Flow } from "components/Layout";
import Footer from "components/Footer";
import Header from "components/Header";
import { Router } from "next/router";

const MyPage = ({ user }) => {
  const { firstName } = user;

  return (
    <>
      <Seo page={{ title: "Min side" }} noindex nofollow />

      <Header />

      <Section limitedWidth outer="firstSection">
        <Block bottom={7}>
          <Flow>
            <h1>Velkommen {firstName}</h1>
            <p>Innhold kommer her</p>
          </Flow>
        </Block>
      </Section>

      <Footer />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { cookie = "" } = ctx.req.headers;

  // Fetch customer data
  const url = `${process.env.BASEURL}/api/user/profile`;
  const response = await fetch(url, {
    headers: {
      cookie
    }
  });
  let result = {};

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

  if (response.ok) {
    result = await response.json();
  }

  return {
    props: {
      user: {
        ...result
      }
    }
  };
}

MyPage.propTypes = {
  user: PropTypes.object.isRequired
};

export default MyPage;
