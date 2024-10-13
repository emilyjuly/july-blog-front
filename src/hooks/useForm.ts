import { useState } from "react";

type TypesProps = {
  [type: string]: {
    regex: RegExp;
    message: string;
  };
};

const types: TypesProps = {
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: "Preencha um email válido"
  },
  password: {
    regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    message:
      "A senha precisa ter no mínimo 6 caracteres e no máximo 16 caracteres, um número e um caracter especial (!@#$%^&*)"
  }
};

const useForm = (type?: string) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function validate(value: string) {
    if (!type) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (error) validate(event.target.value);
    setValue(event.target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  };
};

export default useForm;
