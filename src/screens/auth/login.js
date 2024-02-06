import { Image, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native"
import Validator from "validator"
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "../../components/GlobalStyles";

import { useForm, Controller } from "react-hook-form"
import { useState } from "react";
import { AuthService } from "../../service/auth";

import Toast from 'react-native-toast-message'
import useAuth from "../../context/auth";

const LoginScreen = () => {

    const { Authenticate } = useAuth();

    const [showPassword, setShowPassword] = useState(false)

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    })
    const onSubmit = ({ username, password }) => {
        AuthService.login(username, password)
        .then(({ data }) => {
            Authenticate(data)
        })
        .catch((err) =>  {
            console.log(err)
            if(err?.response?.status === 401){
                Toast.show({
                    type: 'error',
                    text1: 'Credenciais invalidas.',
                    position: 'bottom'
                })
                console.log(401)
                return
            }
            Toast.show({
                type: 'error',
                text1: 'Erro ao realizar login.'
            })
        })
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.mainText}>
                        Olá.
                    </Text>
                    <Text style={styles.subTitle}>
                        Bem vindo ao Força de venda
                    </Text>
                </View>
                <View style={{ gap: 10, marginTop: 35 }}>
                    <View style={[styles.inputContainer]}>
                        <View style={styles.textInoutContainer}>
                            <Feather name="user" size={20} style={{ marginRight: 10 }} />
                            <Controller
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'E-mail é requerido'
                                    },
                                    validate: (value) => {
                                        if(!Validator.isEmail(value)){
                                            return "E-mail invalido"
                                        }
                                    }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder='E-mail'
                                        onBlur={onBlur}
                                        keyboardType="email-address"
                                        onChangeText={onChange}
                                        autoFocus
                                        value={value}
                                        style={styles.textInput} />
                                )}
                                name="username"
                            />
                        </View>
                    </View>
                    {errors.username && errors?.username?.message?.length > 0 &&
                        <Text style={{ color: 'red' }}>{errors?.username?.message}</Text>}
                    <View style={styles.inputContainer}>
                        <View style={styles.textInoutContainer}>
                            <Feather name="key" size={20} style={{ marginRight: 10 }} />
                            <Controller
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'Senha é requerido'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Senha deve conter 6 caracteres no mínimo' 
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: 'Senha deve conter 20 caracteres no máximo' 
                                    }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        secureTextEntry={!showPassword}
                                        placeholder='Senha'
                                        style={styles.textInput} />
                                )}
                                name="password"
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Feather name={showPassword ? "eye-off" : "eye"} size={20} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {errors.password && errors.password.message?.length > 0 &&
                        <Text style={{ color: 'red' }}>{errors?.password?.message}</Text>}
                    <TouchableOpacity style={[GlobalStyles.btn, { marginTop: 25 }]} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.textLogin}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 20, alignItems: 'center', position: 'absolute', bottom: 10, width: '100%' }}>
                    <Image source={require('../../assets/images/logo-black.png')} />
                </View>
            </View>

        </ScrollView>
    )
}

export default LoginScreen;