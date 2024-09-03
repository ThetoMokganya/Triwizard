import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: scale(20),
        marginBottom: scale(15),
        padding: scale(15),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: scale(1),
        borderRadius: scale(20)
    },
    image: {
        width: scale(40),
        height: scale(40)
    },
    detailsContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginStart: scale(10)
    },
    name: {
        fontSize: scale(16)
    },
    gender: {
        fontSize: scale(12)
    }
})
