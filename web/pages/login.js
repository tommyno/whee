import { useState } from "react";
import { useForm } from "react-hook-form";

import postData from "utils/postData";
import { Section, Block } from "components/Layout";
import Footer from "components/Footer";
import Header from "components/Header";
import Button from "components/Button";
import Input from "components/Form/Input";

const Login = () => {
  // Fikse hook forms

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formMessage, setFormMessage] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setFormMessage(false);
    const { mobile } = data;

    const url = `/api/auth/number`;
    const numberData = { number: mobile };
    try {
      const result = await postData(url, numberData);
      console.log("login result", result);
      if (result === "ok") {
        setFormMessage("Alt gikk bra!");
      } else {
        setFormMessage(result);
      }
    } catch (error) {
      setFormMessage(
        "Oisann, noe gikk galt. Prøv igjen, og gi oss beskjed om det fremdeles ikke virker."
      );
    }
  };

  // Form to capture mobile number
  const FormMobile = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          label="Navn"
          register={register({ required: true })}
          isError={!!errors.name}
        />
        <Input
          name="mobile"
          label="Ditt mobilnummer (8 siffer)"
          type="tel"
          register={register({
            required: true,
            minLength: 8,
            maxLength: 8,
            pattern: {
              value: /^[0-9]*$/i,
              message: "invalid email address"
            }
          })}
          isError={!!errors.name}
        />
        <p>{formMessage}</p>
        <Block top={6}>
          <Button type="submit" primary disabled={isSubmitting}>
            Send meg en engangskode
          </Button>
        </Block>
      </form>
    );
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
            <FormMobile />
          </Block>
        </Section>
      </article>

      <Footer />
    </>
  );
};

export default Login;
