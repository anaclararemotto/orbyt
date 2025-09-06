import { Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native"
import SmallLogo from '@/assets/images/small-logo.png'
import { Input } from "@/app/components/input/input.view"

export const LoginView = () => {
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ?  'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
                    <View>
                        <View>
                            <Image source={SmallLogo}/>
                        </View>
                        <View>
                            <Text>Acesse</Text>
                            <Text>Com seus dados pessoais</Text>
                        </View>
                        <View>
                            <Input type="email" title="Email" placeholder="Digite seu email"/>
                            <Input type="password" title="Senha" placeholder="Digite sua senha"/>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}