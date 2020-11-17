import { useState } from "react";

import { Section, Block } from "components/Layout";
import Footer from "components/Footer";

import LoginStep1 from "forms/LoginStep1";
import LoginStep2 from "forms/LoginStep2";

const Login = () => {
  // Get temp jwt token (with mobile number) and requestId from step 1
  // This is passed together with the form in step 2
  const [tempToken, setTempToken] = useState({});

  return (
    <>
      <article>
        <Section limitedWidth outer="firstSection">
          <Block bottom={7}>
            <h1>Logg inn</h1>
          </Block>

          <Block bottom={7}>
            {!tempToken?.phoneJwt ? (
              <>
                {/* Step 1 - Enter mobile number */}
                <LoginStep1 passChildData={setTempToken} />
              </>
            ) : (
              <>
                {/* Step 2 - Enter pin verification */}
                <LoginStep2 tempToken={tempToken} />
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
