import PropTypes from "prop-types";
import Router from "next/router";

import Seo from "utils/seo";

import { Section, Flow, Block } from "components/Layout";
import Footer from "components/Footer";
import Button from "components/Button";
import Box from "components/Box";

const MyPage = ({ user }) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    adress,
    zipcode,
    city,
    created,
    status,
    accessories
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

      <Section limitedWidth outer="firstSection">
        <h1>Hei {firstName}!</h1>
      </Section>

      <Section limitedWidth>
        <Box data={{ bgColor: "peach" }}>
          <div>
            <h2>Din sykkel</h2>

            <h3>Modell</h3>
            <p className="no-margin-top">Kettler Familiano</p>

            {accessories && (
              <>
                <h3 id="ekstrautstyr">Ekstrautstyr</h3>
                <p className="no-margin-top">
                  {accessories.split("\n").map((item) => {
                    return (
                      <span key={item}>
                        {item}
                        <br />
                      </span>
                    );
                  })}
                </p>
              </>
            )}

            <h3>Status på sykkel</h3>
            <p className="no-margin-top">{status}</p>
          </div>
        </Box>

        {/* {!accessories && (
          <Block top={6}>
            <Button link="/ekstrautstyr" primary>
              <span className="text-button">Bestill ekstrautstyr</span>
            </Button>
          </Block>
        )} */}
      </Section>

      <Section limitedWidth>
        <Flow>
          <h2>Personalia</h2>

          <h3>Adresse</h3>
          <p className="no-margin-top">
            {firstName} {lastName}
            <br />
            {adress}
            <br />
            {zipcode} {city}
          </p>

          <h3>Mobil</h3>
          <p className="no-margin-top">{phone}</p>

          <h3>Epost</h3>
          <p className="no-margin-top">{email}</p>

          <p>
            Er informasjonen feil eller utdatert? Si fra til{" "}
            <a href="mailto:hei@whee.no" className="link">
              hei@whee.no
            </a>{" "}
            så hjelper vi deg.
          </p>
        </Flow>
      </Section>

      {/* // This has no value now */}
      {/* <Section limitedWidth>
        <h2>Kunde siden</h2>
        <p>{formattedDate}</p>
      </Section> */}

      <Section limitedWidth>
        <Button type="button" onClick={handleLogout}>
          Logg ut
        </Button>
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
