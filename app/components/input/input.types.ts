import { TextStyle } from "react-native";

export type InputProps = {
  type: "text" | "password" | "email" | "confirmPassword";
  title: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: TextStyle;
  onError?: (error: string | null) => void;
  passwordToMatch?: string;
};

export type UseInputModelParams = {
  type?: "text" | "password" | "email" | "confirmPassword";
  passwordToMatch?: string;
  onError?: (error: string | null) => void;
};
