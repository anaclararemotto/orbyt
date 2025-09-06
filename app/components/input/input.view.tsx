import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { InputProps } from "./input.types";
import { useInputModel } from "./input.model";
import { Eye, EyeOff } from 'lucide-react-native';
import { useTheme } from "@react-navigation/native";

export const Input = ({
  type,
  title,
  placeholder,
  value,
  style,
  onChangeText,
  onError,
  passwordToMatch,
}: InputProps) => {

  const {
    validate,
    showPassword,
    setShowPassword,
    isPasswordType,
    isEmail,
    error,
  } = useInputModel({ type, passwordToMatch, onError });

  const styles = useTheme();

  return (
    <View style={styles.container}>
      {title && <Text style={styles.label}>{title}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={(text) => {
            onChangeText?.(text);
            validate(text); // valida enquanto digita
          }}
        //   style={[styles.input, style, { color: colors.textColor }]}
          placeholder={placeholder}
        //   placeholderTextColor={colors.textColor}
          secureTextEntry={isPasswordType && !showPassword}
          keyboardType={"email-address"}
          autoCapitalize={isEmail ? "none" : "sentences"}
        />

        {isPasswordType && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (
              <EyeOff width={20} height={20}/>
            ) : (
              <Eye width={20} height={20}  />
            )}
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={{ color: "red", marginTop: 4 }}>{error}</Text>}
    </View>
  );
};

