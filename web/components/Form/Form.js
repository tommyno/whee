import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div>Navn</div>
        <input type="text" name="name" ref={register} />
      </label>
      <button type="submit">Sett meg på lista</button>
    </form>
  );
};

export default Form;
