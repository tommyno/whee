import React, { useState } from "react";
import { useForm } from "react-hook-form";

import postData from "utils/postData";

import { Flow, Block } from "components/Layout";
import Button from "components/Button";
import Input from "./Input";
import Textarea from "./Textarea";

const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setIsError(false);
    // Hubspot form api: https://legacydocs.hubspot.com/docs/methods/forms/submit_form
    const url =
      "https://api.hsforms.com/submissions/v3/integration/submit/8373303/93146f03-dbf7-443e-bd0d-5cf6fbd03499";

    // Format data for Hubspot
    const dataFormattedForHubspot = {
      fields: [
        {
          name: "firstname",
          value: data.name
        },
        {
          name: "email",
          value: data.email
        },
        {
          name: "message",
          value: data.message
        }
      ]
      // skipValidation: true
    };
    const response = await postData(url, dataFormattedForHubspot);
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
        <p>Snart kan du suse avgårde på din egen Whee!</p>
        <p>
          Nå står du på ventelisten. Om noen få dager vil du motta en e-post med
          ditt kønummer og mer informasjon fra oss. Ha en fin dag så lenge!
        </p>
        <img src="/images/thank-you-image.png" alt="Takk for din påmelding!" />
      </Flow>
    );
  }

  // Show signup form
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        label="Navn"
        register={register({ required: true })}
        isError={!!errors.name}
      />

      <Input
        name="email"
        label="E-post"
        type="email"
        register={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
        isError={!!errors.email}
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
            Auda, her gikk noe galt. Har du brukt en gyldig e-post? Prøv igjen,
            eller gi oss et vink på{" "}
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
