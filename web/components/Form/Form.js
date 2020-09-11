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

    const testdata = {
      submittedAt: Date.now(),
      fields: [
        {
          name: "email",
          value: data.email
        },
        {
          name: "firstname",
          value: data.name
        }
      ],
      context: {
        pageUri: "whee.no/fortroppen",
        pageName: "Fortroppen"
      }
    };
    const response = await postData(url, testdata);
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

// {
//   "submittedAt": "1517927174000", // This millisecond timestamp is optional. Update the value from "1517927174000" to avoid an INVALID_TIMESTAMP error.
//   "fields": [
//     {
//       "name": "email",
//       "value": "example@example.com"
//     },
//     {
//       "name": "firstname",
//       "value": "Jeff"
//     }
//   ],

// data= {
//   email: "test@hest.no"
//   name: "w"
// }
