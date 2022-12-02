import "../register/register.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/misc/formSchema";
import { FormValues } from "../../types/FormValues";
import FormInput from "../../components/register/form/FormInput";
import { postForm } from "../../api/Api";
import { useState } from "react";
import { AxiosError } from "axios";
import { useGlobalContext } from "../../context/DataContext";

const Register = () => {
  const [response, setResponse] = useState<string>("");
  const { allData } = useGlobalContext();

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      login: "",
      password: "",
      email: "",
      phone: "",
      accept: false,
    },
    resolver: yupResolver(schema),
  });

  const submitForm: SubmitHandler<FormValues> = (data) => {
    setResponse("");

    postForm(data, allData).then(
      (res) => {
        console.log(res);
      },
      (err: AxiosError) => {
        console.log(err.message);
        setResponse(err.message);
      }
    );
  };

  return (
    <div className="form container">
      <div className="form-header">
        <h4>formularz rejestracyjny</h4>
      </div>
      <div className="form-content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit(submitForm)();
          }}
          autoComplete="off"
        >
          <FormInput label={"Login:"} name="login" control={control} />
          <FormInput label={"Hasło:"} name="password" control={control} />
          <FormInput label={"E-mail:"} name="email" control={control} />
          <FormInput label={"Numer telefonu:"} name="phone" control={control} />
          <FormInput label={"Akceptuję Regulamin"} name="accept" control={control} type="checkbox" />
          <div className="form-content-btn mt-4">
            <button type="submit">zapisz</button>
          </div>
          {!!response && <p className="fs-4 mt-3">{response}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
