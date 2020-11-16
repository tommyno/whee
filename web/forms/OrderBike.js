import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import postData from "utils/postData";

import { Block } from "components/Layout";
import Button from "components/Button";
import Input from "components/Form/Input";
import InputHoneypot from "components/Form/InputHoneypot";
import Textarea from "components/Form/Textarea";
import styles from "components/Form/Input.module.scss";

const OrderBike = ({ initialValues }) => {
  const [isError, setIsError] = useState(false);
  const [city, setCity] = useState("");

  const router = useRouter();

  const { register, handleSubmit, errors, formState, watch } = useForm();

  // Fetch poststed when postnummer is filled
  const zipcode = watch("zipcode", "");
  useEffect(() => {
    const getCity = async () => {
      const url = `https://ws.geonorge.no/adresser/v1/sok?postnummer=${zipcode}&treffPerSide=1&filtrer=adresser.poststed`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        const { poststed } = result?.adresser[0];
        const normalizedZip =
          poststed.charAt(0) + poststed.slice(1).toLowerCase();
        setCity(normalizedZip);
      } catch (error) {
        setCity("");
        console.log(error);
      }
      return null;
    };
    if (zipcode?.length === 4) {
      getCity();
    } else {
      setCity("");
    }
  }, [zipcode]);

  const onSubmit = async (data) => {
    setIsError(false);

    const url = "/api/order/bike";
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
          type="tel"
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

        <div className={styles.zipWrap}>
          <Input
            name="zipcode"
            type="tel"
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

          {city && <div className={styles.city}>{city}</div>}

          <Input
            name="city"
            label="Sted"
            register={register()}
            defaultValue={city}
            hidden
          />
        </div>

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

OrderBike.defaultProps = {
  initialValues: {}
};

OrderBike.propTypes = {
  initialValues: PropTypes.object
};

export default OrderBike;
