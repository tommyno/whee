import { useState } from "react";

import { Section, Block } from "components/Layout";
import Footer from "components/Footer";
import Header from "components/Header";
import LoginNumberForm from "components/Form/LoginNumberForm";
import LoginPinForm from "components/Form/LoginPinForm";

const Login = () => {
  // Get jwt token (with mobile number) and requestId from step 1 form
  // This is passed together with the form in step 2
  const [loginToken, setLoginToken] = useState({});

  return (
    <>
      <Header />

      <article>
        <Section limitedWidth outer="firstSection">
          <Block bottom={7}>
            <h1>Logg inn</h1>
          </Block>

          <Block bottom={7}>
            {!loginToken?.token ? (
              <>
                {/* Step 1 - Enter mobile number */}
                <LoginNumberForm passChildData={setLoginToken} />
              </>
            ) : (
              <>
                {/* Step 2 - Enter pin verification */}
                <LoginPinForm loginToken={loginToken} />
              </>
            )}
          </Block>
        </Section>
      </article>

      <Footer />
    </>
  );
};

export default Login;
