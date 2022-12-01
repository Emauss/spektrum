import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema = yup
  .object({
    login: yup.string().required("Login jest wymagany"),
    password: yup.string().required("Hasło jest wymagany").min(8, "Hasło jest za krótkie - powinno się składać z conajmniej 8 znaków"),
    email: yup.string().email("Nieprawidłowy format adresu e-mail").required("E-mail jest wymagany"),
    phone: yup
      .string()
      .required("Numer telefonu jest wymagany")
      .min(9, "Nieprawidłowy numer telefonu")
      .matches(phoneRegExp, "Nieprawidłowy numer telefonu"),
    accept: yup.boolean().oneOf([true], "Wymagana akceptacja regulaminu"),
  })
  .required();
