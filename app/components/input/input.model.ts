import { useState } from "react";
import { UseInputModelParams } from "./input.types";

export function useInputModel({
  type = "text",
  passwordToMatch,
  onError,
}: UseInputModelParams = {}) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isPasswordType = type === "password" || type === "confirmPassword";
  const isEmail = type === "email";

  const validate = (text: string) => {
    let err: string | null = null;

    if (isEmail) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(text)) err = "Email inválido";
    }

    if (isPasswordType) {
      if (text.length < 6) err = "A senha deve ter pelo menos 6 caracteres";
    }

    if (type === "confirmPassword") {
      if (passwordToMatch && text !== passwordToMatch) {
        err = "As senhas precisam ser iguais";
      }
    }

    setError(err);
    onError?.(err);
  };

  return {
    showPassword,
    setShowPassword,
    error,
    setError,
    isPasswordType,
    isEmail,
    validate,
  };
}
