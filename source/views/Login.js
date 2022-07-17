import {StatusBar, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from "react-native";
import {Button, TextInput, useTheme} from "react-native-paper";
import style from "../stylesheet/style";
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from "react";
import login_styles from "../stylesheet/LoginStyles";
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
const baseUrl = 'https://farm-web-api.herokuapp.com/api/Account/login';
function LoginUser(){
    return fetch('https://farm-web-api.herokuapp.com/api/Account/login',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',

        },
        body: JSON.stringify({
            username: 'thimakulani@gmail.com',
            password: 'THIma$!305',
        })
    }).then((response)=>response.json())
        .then((responseJson)=>{
            return responseJson;
        }).catch((error)=>{
            console.log(error);
        })
}


function Login({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { colors } = useTheme();

    function loginHandle(username, password)
    {
        console.warn(username+password);
    }
    const onPress=()=>{
        Keyboard.dismiss;

    }

    return(
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={login_styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={login_styles.header}>
                <Text style={login_styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[login_styles.footer, {
                    backgroundColor: colors.background
                }]}
            >
            <View>
                <TextInput
                           placeholder={'Username'}
                           theme={{colors: { primary: '#009387',underlineColor:'transparent'}}}
                           keyboardType={'email-address'}
                           left={<TextInput.Icon name={'email'} color={'#009387'} />}
                           autoCapitalize={'none'}
                           mode={'outlined'}
                           value = {email}

                           onChangeText={text=>setEmail(text)}
                />

                <TextInput
                           placeholder={'Username'}
                           keyboardType={'email-address'}
                           left={<TextInput.Icon name={'lock'} color={'#009387'}/>}
                           autoCapitalize={'none'}
                           mode={'outlined'}
                           theme={{ colors: { primary: '#009387',underlineColor:'transparent',}}}
                           value = {password}
                           onChangeText={text=>setPassword(text)}
                />

                <TouchableOpacity>
                    <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={login_styles.button}>
                    <TouchableOpacity
                        style={login_styles.signIn}
                        onPress={() => {loginHandle( email, password )}}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={login_styles.signIn}
                        >
                            <Text style={[login_styles.textSign, {
                                color:'#fff'
                            }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            </Animatable.View>
        </View>
        </TouchableWithoutFeedback>
    )
}
export default Login;