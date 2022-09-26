import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewAppBar: {
        flex: 0.075,
    },
    appbar: {
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        elevation: 0
    },
    viewListItem: {
        zIndex: 1,
        elevation: 1
    },
});

export default styles;