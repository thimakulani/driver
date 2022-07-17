import Login from "../views/Login";
import Dashboard from "../views/Dashboard";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
function RootStackScreen(){

    return(

            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={'Login'} component={Login} />
                <Stack.Screen name={"Dashboard"} component={Dashboard} />
            </Stack.Navigator>

    )
};
export default RootStackScreen;