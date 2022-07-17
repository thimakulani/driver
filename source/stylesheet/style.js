import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%',
        width:'100%',
    },
    wrap_container:{
        backgroundColor: 'white',
        padding:'5%',
        width: '90%',
        height: 'auto',
        margin:'10%',
        borderRadius:10
    },
    login_tex_input:{
        backgroundColor:'transparent',
        paddingLeft:10,
        paddingBottom:0,
        paddingTop:0,
        height:40,
        margin:5,
        borderColor:'009387'
    },
    btn_sign_up:{
        borderRadius:5,
        borderWidth:2,
        borderStyle:'solid',
        backgroundColor:'#434bbb',
        width:'100%',
        color:'#ffffff'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
});
export default styles;