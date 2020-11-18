import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import { Block } from "components/Layout";
import Button from "components/Button";

const AccessoriesForm = ({ items }) => {
  const [errorMessage, setErrorMessage] = useState(false);

  const { handleSubmit, errors, formState } = useForm();

  const router = useRouter();

  const onSubmit = async () => {
    setErrorMessage(false);

    const url = `/api/order/accessories`;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          accessories: items
        })
      });

      const result = await response.json();

      if (response.ok) {
        // Forward to /min-side
        console.log("Suksess, du har nå bestilt ekstrautstyr");
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
      <form onSubmit={handleSubmit(onSubmit)}>
        {errorMessage && (
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
            Send bestilling
          </Button>
        </Block>
      </form>
    </>
  );
};

AccessoriesForm.propTypes = {
  items: PropTypes.string.isRequired
};
export default AccessoriesForm;
