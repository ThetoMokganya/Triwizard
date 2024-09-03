import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: scale(20),
        marginTop: scale(20),
        flexDirection: 'column'
    },
    primarySection: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    image: {
        width: scale(140),
        height: scale(140)
    },
    personalDetailsContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginStart: scale(20)
    },
    nameText: {
        fontSize: scale(20)
    },
    houseText: {
        marginTop: scale(5),
        fontSize: scale(16),
        color: '#555555'
    },
    genderText: {
        marginTop: scale(5),
        fontSize: scale(14),
        color: '#555555'
    },
    dobText: {
        marginTop: scale(5),
        fontSize: scale(14),
        color: '#555555'
    }
})
