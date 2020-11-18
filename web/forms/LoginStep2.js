import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { Block } from "components/Layout";
import Button from "components/Button";
import Input from "components/Form/Input";

const LoginStep2 = ({ tempToken }) => {
  const { requestId, phoneJwt } = tempToken;
  const [errorMessage, setErrorMessage] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, errors, formState } = useForm();

  const onSubmit = async (data) => {
    setErrorMessage(false);

    // Prepare data object
    const loginData = {
      otp: data.otp,
      requestId,
      phoneJwt
    };

    const url = `/api/auth/login/step2`;
    try {
      const response = await fetch(url, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      });

      const result = await response.json();

      if (response.ok) {
        // All good
        // Forward to /min-side
        console.log("Suksess, du er nå logget inn", result);
        router.push("/min-side").then(() => window.scrollTo(0, 0));
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      console.log("catch error", error);
    }
  };

  return (
    <>
      <Block bottom={6}>
        <p>Sjekk telefonen din, og skriv inn engangskoden.</p>
      </Block>
      <form
        onSubmit={handleSubmit(onSubmit)}
        data-animate-in
        data-animation-order="1"
      >
        <Input
          name="otp"
          type="tel"
          label="Engangskode fra SMS"
          widthCharacters="12"
          maxLength="6"
          register={register({
            required: "Skriv din engangskode, 6 siffer",
            pattern: {
              value: /^[0-9]*$/,
              message: "Skriv din engangskode, 6 siffer"
            },
            minLength: {
              value: 6,
              message: "Skriv din engangskode, 6 siffer"
            }
          })}
          error={errors.otp}
          autoFocus
        />

        {errorMessage && (
          <Block top={5}>
            <p className="color--red">{errorMessage}</p>
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
            Logg inn
          </Button>
        </Block>
      </form>
    </>
  );
};

LoginStep2.propTypes = {
  tempToken: PropTypes.shape({
    requestId: PropTypes.string.isRequired,
    phoneJwt: PropTypes.string.isRequired
  }).isRequired
};

export default LoginStep2;
