import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        elevation: -1
    },
    button: {
        width: '100%',
        top: '40%',
        height: 50,
        borderRadius: 4,
        backgroundColor: 'blue',
        position: 'absolute',
        elevation: 3,
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textButton: {
        fontWeight: 'bold',
        color: 'white'
    },
    stretch: {
        width: 100,
        height: 100,
    },
});

export default styles;