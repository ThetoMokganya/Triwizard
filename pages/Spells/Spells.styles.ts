import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    container: {
        borderColor: '#f9f9f9f',
        borderWidth: scale(1),
        borderRadius: scale(20),
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: scale(16),
        fontWeight: '500'
    },
    subtitleText: {
        fontSize: scale(14),
        color: '#555555',
        marginTop: scale(2)
    }
})
