import { useForm } from "react-hook-form";

import postData from "utils/postData";

import Input from "./Input";
import Button from "components/Button";

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // Hubspot form api: https://legacydocs.hubspot.com/docs/methods/forms/submit_form
    const url =
      "https://api.hsforms.com/submissions/v3/integration/submit/8373303/93146f03-dbf7-443e-bd0d-5cf6fbd03499";

    const dataFormattedForHubspot = {
      fields: [
        {
          name: "email",
          value: data.email
        },
        {
          name: "firstname",
          value: data.name
        }
      ]
    };
    const response = await postData(url, dataFormattedForHubspot);
    console.log("Response from Hubspot", response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="name" label="Navn" register={register} />
      <Input name="email" label="E-post" type="email" register={register} />
      <Button type="submit">Sett meg på lista</Button>
    </form>
  );
};

export default Form;
