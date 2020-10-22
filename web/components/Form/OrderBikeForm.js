import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import postData from "utils/postData";

import { Flow, Block } from "components/Layout";
import Button from "components/Button";
import Input from "./Input";
import InputHoneypot from "./InputHoneypot";
import Textarea from "./Textarea";

const OrderBikeForm = ({ initialValues }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setIsError(false);

    const url = "/api/form/order";
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
        <h2>Tusen takk for din bestilling!</h2>
        <p>Snart vil du få tilsendt en digital kontrakt på e-post.</p>
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
        defaultValue={`${initialValues?.firstName} ${initialValues?.lastName}`}
        register={register({
          required: "Skriv ditt fulle navn"
        })}
        error={errors.name}
      />

      <Input
        name="email"
        label="E-post"
        type="email"
        defaultValue={initialValues?.email}
        register={register({
          required: "Skriv en gyldig e-post adresse",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Fyll inn en gyldig e-post adresse"
          }
        })}
        error={errors.email}
      />

      <Input
        name="mobile"
        label="Mobilnummer"
        widthCharacters="8"
        maxLength="8"
        register={register({
          required: "Skriv ditt mobilnummer, 8 siffer",
          pattern: {
            value: /^[0-9]*$/,
            message: "Skriv ditt mobilnummer, 8 siffer"
          },
          minLength: {
            value: 8,
            message: "Skriv ditt mobilnummer, 8 siffer"
          }
        })}
        error={errors.mobile}
      />

      <Input
        name="adress"
        label="Adresse"
        register={register({
          required: "Skriv din gateadresse"
        })}
        error={errors.adress}
      />

      <Input
        name="zipcode"
        label="Postnummer"
        maxLength="4"
        widthCharacters="4"
        register={register({
          required: "Skriv ditt postnummer, 4 siffer",
          pattern: {
            value: /^[0-9]*$/,
            message: "Skriv ditt postnummer, 4 siffer"
          },
          minLength: {
            value: 4,
            message: "Skriv ditt postnummer, 4 siffer"
          }
        })}
        error={errors.zipcode}
      />

      <Textarea
        name="message"
        label="Valgfri beskjed"
        placeholder="Er det noe du vil fortelle oss?"
        register={register()}
      />

      {isError && (
        <Block top={5}>
          <p>
            Auda, her gikk noe galt. Prøv igjen, gi oss et vink på{" "}
            <a href="mailto:hei@whee.no" className="link">
              hei@whee.no
            </a>{" "}
            så hjelper vi deg.
          </p>
        </Block>
      )}

      <Block top={6}>
        <Button type="submit" primary disabled={isSubmitting}>
          Bestill sykkel
        </Button>
      </Block>
    </form>
  );
};

OrderBikeForm.defaultProps = {
  initialValues: {}
};

OrderBikeForm.propTypes = {
  initialValues: PropTypes.object
};

export default OrderBikeForm;
