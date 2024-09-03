import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    houseName: {
        fontSize: scale(16),
        fontWeight: '500',
        color: '#000000'
    },
    viewDetails: {
        fontSize: scale(12),
        color: '#6495ed'
    },
    item: {
        borderColor: '#f9f9f9f',
        borderWidth: scale(1),
        borderRadius: scale(20),
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
