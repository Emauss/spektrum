import { FormFieldProps } from "../interfaces/form/IFormFieldProps";

export type InputProps = {
  label?: string;
  disableError?: boolean;
} & React.HTMLProps<HTMLInputElement> &
  Omit<FormFieldProps, "children" | "className">;
