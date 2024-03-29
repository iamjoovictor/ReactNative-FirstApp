import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: -1,
        elevation: -1
    },
    mapView: {
        position:'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        
    },
    markerView:{
        width:100,
        height:50
    },
    button_est: {
        width: 150,
        height: 40,
        borderRadius: 4,
        elevation: 3,
        zIndex: 3,
        backgroundColor: 'blue',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50,
        right: 50
    },
    button_home: {
        width: 150,
        height: 40,
        borderRadius: 4,
        elevation: 1,
        zIndex: 1,
        backgroundColor: 'blue',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50,
        left: 50
    },
    textButton: {
        color: 'white'
    }
});

export default styles;