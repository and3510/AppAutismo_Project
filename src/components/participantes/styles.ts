import { StyleSheet } from "react-native";

export const style = StyleSheet.create( 
    {

    container: {
        marginTop: 10,
        width: '100%',
        backgroundColor: "#1f1e25",
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'

    },    
    name: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        marginLeft: 16

    },
    buttontext: {
        color: '#fff',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center'
    }
    }

)