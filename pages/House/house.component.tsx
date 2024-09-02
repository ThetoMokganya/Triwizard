import { Text, View } from "react-native";
import { HouseComponentProps } from "./House.types";
import { styles } from "./house.style";

export function HouseComponent(props: HouseComponentProps){
    return (
    <View style={styles.container}>
        <Text>{props.houseName}</Text>
    </View>)
}
