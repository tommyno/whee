import { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import postData from "utils/postData";

import { Block } from "components/Layout";
import Button from "components/Button";
import Input from "./Input";
import InputHoneypot from "./InputHoneypot";
import Textarea from "./Textarea";

const OrderBikeForm = ({ initialValues }) => {
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const { register, handleSubmit, errors, formState } = useForm();

  const onSubmit = async (data) => {
    setIsError(false);

    const url = "/api/form/order";
    const response = await postData(url, data);
    if (response) {
      // Redirect to thank you page
      router.push("/bestilt");
    } else {
      // Show error and enable form
      setIsError(true);
    }
  };

  return (
    <>
      <Block bottom={4}>
        <h2>Bestillingsskjema</h2>
      </Block>
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
              value: /^\S+@\S+\.\S+$/,
              message: "Skriv inn en gyldig e-post adresse"
            }
          })}
          error={errors.email}
        />

        <Input
          name="mobile"
          label="Mobilnummer"
          widthCharacters="12"
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
          widthCharacters="12"
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
              Auda, her gikk noe galt. Prøv igjen, eller gi oss et vink på{" "}
              <a href="mailto:hei@whee.no" className="link">
                hei@whee.no
              </a>{" "}
              så hjelper vi deg.
            </p>
          </Block>
        )}

        <Block top={6}>
          <Button
            type="submit"
            primary
            disabled={formState.isSubmitting}
            isSubmitting={formState.isSubmitting}
            errors={errors}
          >
            Bestill sykkel
          </Button>
        </Block>
      </form>
    </>
  );
};

OrderBikeForm.defaultProps = {
  initialValues: {}
};

OrderBikeForm.propTypes = {
  initialValues: PropTypes.object
};

export default OrderBikeForm;
