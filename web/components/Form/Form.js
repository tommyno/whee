import { useForm } from "react-hook-form";

import Input from "./Input";
import Button from "components/Button";

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="name" label="Navn" register={register} />
      <Input name="email" label="E-post" type="email" register={register} />
      <Button type="submit">Sett meg på lista</Button>
    </form>
  );
};

export default Form;
