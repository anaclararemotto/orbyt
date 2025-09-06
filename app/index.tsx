import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./pages/login/login";
import { ThemeProvider } from "@/theme/ThemeContext";

export default function index() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView>
          <LoginScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
