import React, { useState } from "react";
import { useForm } from "react-hook-form";

import postData from "utils/postData";

import { Flow, Block } from "components/Layout";
import Button from "components/Button";
import Input from "./Input";
import InputHoneypot from "./InputHoneypot";
import Textarea from "./Textarea";

const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setIsError(false);

    const url = "/api/form/signup";
    const response = await postData(url, data);
    if (response) {
      // Show thank you message
      setIsFormSubmitted(true);
    } else {
      // Show error and enable form
      setIsSubmitting(false);
      setIsError(true);
    }
  };

  // Show if form has been submitted successfully
  if (isFormSubmitted) {
    return (
      <Flow>
        <h2>Tusen takk for din forhåndsbestilling!</h2>
        <p>
          Du står nå på ventelisten, og vil om få dager motta en e-post med
          kønummer og mer informasjon fra oss.
        </p>
        <p>Snart kan du suse avgårde på din egen Whee!</p>
        <img src="/images/thank-you-image.png" alt="Takk for din påmelding!" />
      </Flow>
    );
  }

  // Show signup form
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputHoneypot register={register} />

      <Input
        name="name"
        label="Navn"
        register={register({ required: "Skriv ditt fulle navn" })}
        error={errors.name}
      />

      <Input
        name="email"
        label="E-post"
        type="email"
        register={register({
          required: "Skriv en gyldig e-post adresse",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Skriv inn en gyldig e-post adresse"
          }
        })}
        error={errors.email}
      />

      <Textarea
        name="message"
        label="Valgfri beskjed"
        placeholder="Er det noe du lurer på eller vil fortelle oss?"
        register={register()}
      />

      {isError && (
        <Block top={5}>
          <p>
            Auda, her gikk noe galt. Prøv igjen, eller gi oss et vink på{" "}
            <a href="mailto:hei@whee.no" className="link">
              hei@whee.no
            </a>{" "}
            så hjelper vi deg.
          </p>
        </Block>
      )}

      <Block top={6}>
        <Button type="submit" primary disabled={isSubmitting}>
          Sett meg på venteliste
        </Button>
      </Block>
    </form>
  );
};

export default Form;
