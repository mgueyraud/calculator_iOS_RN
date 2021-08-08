import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black'
    },
    resultado:{
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    calculadoraContainer:{
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end'
    },
    resultadoPeque:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    btn:{
        height: 80,
        width: 80,
        // backgroundColor: '#9B9B9B',
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    buttonsContainer:{
        flexDirection: 'row',
        marginBottom: 18,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    btnText:{
        color: 'white',
        fontWeight: '300',
        fontSize: 30
    }
});

export default styles;