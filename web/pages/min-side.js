import PropTypes from "prop-types";
import Router from "next/router";

import Seo from "utils/seo";

import { Section, Block, Flow } from "components/Layout";
import Footer from "components/Footer";
import Header from "components/Header";
import Button from "components/Button";

const MyPage = ({ user }) => {
  const {
    firstName,
    lastName,
    email,
    mobile,
    adress,
    zip,
    created,
    status
  } = user;

  // Format date
  const formattedDate = new Date(created).toLocaleDateString("no", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const handleLogout = async () => {
    const response = await fetch("/api/auth/logout");
    if (response.ok) {
      Router.replace("/");
    }
  };

  return (
    <>
      <Seo page={{ title: "Min side" }} noindex nofollow />

      <Header />

      <Section limitedWidth outer="firstSection">
        <Block bottom={7}>
          <Flow>
            <h1>Velkommen {firstName}</h1>
            <h2 className="h3">Personalia</h2>
            <p>
              {firstName} {lastName}
              <br />
              {mobile}
              <br />
              {email}
              <br />
              {adress}
              <br />
              {zip}
              <br />
            </p>

            <h2 className="h3">Status på sykkel</h2>
            <p>{status}</p>

            <h2 className="h3">Kunde siden</h2>
            <p>{formattedDate}</p>
          </Flow>
          <Block top={7}>
            <Button type="button" onClick={handleLogout}>
              Logg ut
            </Button>
          </Block>
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
