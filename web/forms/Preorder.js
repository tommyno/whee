import React, { useState } from "react";
import { useForm } from "react-hook-form";

import postData from "utils/postData";

import { Flow, Block } from "components/Layout";
import Button from "components/Button";
import Input from "components/Form/Input";
import InputHoneypot from "components/Form/InputHoneypot";
import Textarea from "components/Form/Textarea";

const Preorder = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const { register, handleSubmit, errors, formState } = useForm();

  const onSubmit = async (data) => {
    setIsError(false);

    const url = "/api/preorder/bike";
    const response = await postData(url, data);
    if (response) {
      // Show thank you message
      setIsFormSubmitted(true);
    } else {
      // Show error and enable form
      setIsError(true);
    }
  };

  // Show if form has been submitted successfully
  if (isFormSubmitted) {
    return (
      <Flow>
        <h2>Tusen takk for registreringen!</h2>
        <p>
          Vi har sendt deg en e-postbekreftelse. Husk å legge oss til som
          kontakt, så vi ikke havner i spamfilteret.
        </p>
        <p>Du hører fra oss, når vi har sykler klare.</p>
        <img
          src="/images/thank-you-image.png"
          alt="Takk for din registrering!"
        />
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
        <Button type="submit" primary disabled={formState.isSubmitting}>
          Sett meg på venteliste
        </Button>
      </Block>
    </form>
  );
};

export default Preorder;
