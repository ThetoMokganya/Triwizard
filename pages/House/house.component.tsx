import { Text, TouchableOpacity } from "react-native";
import { styles } from "./House.style";
import { HouseComponentProps } from "./House.types";

export function HouseComponent(props: HouseComponentProps) {
    return (
        <TouchableOpacity style={styles.item} onPress={props.onPress}>
            <Text style={styles.houseName}>{props.houseName} House</Text>
            <Text style={styles.viewDetails}>View details</Text>
        </TouchableOpacity>
    )
}
