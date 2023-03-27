import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        zIndex: -1,
        elevation: -1
    },
    viewProfile: {
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    viewAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    viewText: {
        width: '50%',
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBold: {
        fontWeight: 'bold',
    },
    line: {
        height: 1,
        opacity: 1,
        backgroundColor: 'grey'
    },
    viewButtons: {
        height: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10%'
    },
    stretch: {
        width: 100,
        height: 100,
    },
});

export default styles;