import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import { Block } from "components/Layout";
import Button from "components/Button";
import Input from "components/Form/Input";

const LoginNumberForm = ({ passChildData }) => {
  const [errorMessage, setErrorMessage] = useState(false);

  const { register, handleSubmit, errors, formState } = useForm();

  const onSubmit = async (data) => {
    setErrorMessage(false);

    const url = `/api/auth/number`;
    try {
      const response = await fetch(url, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        // Number is validated, return result and show form step 2 (pin)
        passChildData(result);
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
          name="number"
          label="Ditt mobilnummer"
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
          error={errors.number}
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
            Send meg en engangskode
          </Button>
        </Block>
      </form>
    </>
  );
};

LoginNumberForm.propTypes = {
  passChildData: PropTypes.any.isRequired
};

export default LoginNumberForm;
