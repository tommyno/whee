import { useState } from "react";
import { useForm } from "react-hook-form";

import { Section, Block } from "components/Layout";
import Footer from "components/Footer";
import Header from "components/Header";
import Button from "components/Button";
import Input from "components/Form/Input";

const Login = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formMessage, setFormMessage] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setFormMessage(false);
    const { mobile } = data;

    const url = `/api/auth/mobile/${mobile}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (response.ok) {
        setFormMessage("Alt gikk bra!");
      } else {
        setFormMessage(result.errorMessage);
      }
    } catch (error) {
      setFormMessage(
        "Oisann, noe gikk galt. Prøv igjen, og gi oss beskjed om det fremdeles ikke virker."
      );
    }
  };

  return (
    <>
      <Header />

      <article>
        <Section limitedWidth outer="firstSection">
          <Block bottom={7}>
            <h1>Logg inn</h1>
          </Block>
          <Block bottom={7}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="mobile"
                label="Ditt mobilnummer (8 siffer)"
                type="tel"
                maxLength="8"
                minLength="8"
                // register={register({
                //   required: true,
                //   minLength: 8,
                //   maxLength: 8,
                //   pattern: /^[0-9]*$/
                // })}
                isError={!!errors.name}
              />
              <p>{formMessage}</p>
              <Block top={6}>
                <Button type="submit" primary disabled={isSubmitting}>
                  Send meg en engangskode
                </Button>
              </Block>
            </form>
          </Block>
        </Section>
      </article>

      <Footer />
    </>
  );
};

export default Login;
