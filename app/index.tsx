import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./pages/login/login";

export default function index() {
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <LoginScreen/>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}