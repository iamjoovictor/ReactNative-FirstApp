import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        zIndex: -1,
        elevation: -1
    },
    barCode: {
        flex: 1,
        width: '132%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    buttonScanAgain: {
        width: '100%',
        top: '50%',
        height: 50,
        borderRadius: 4,
        backgroundColor: 'blue',
        position: 'absolute',
        elevation: 3,
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    againTap: {
        color: 'white'
    }
});

export default styles;