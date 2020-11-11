import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { Block } from "components/Layout";
import Button from "components/Button";
import Input from "components/Form/Input";

const LoginPinForm = ({ loginToken }) => {
  const { requestId, token } = loginToken;
  const [errorMessage, setErrorMessage] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, errors, formState } = useForm();

  const onSubmit = async (data) => {
    setErrorMessage(false);

    // Prepare data object
    const loginData = {
      pin: data.pin,
      requestId,
      token
    };

    const url = `/api/auth/pin`;
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
        router.push("/min-side");
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      console.log("catch error", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="pin"
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
          error={errors.pin}
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

LoginPinForm.propTypes = {
  loginToken: PropTypes.shape({
    requestId: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired
  }).isRequired
};

export default LoginPinForm;
