import { Text, View } from "react-native";
import { SpellsComponentProps } from ".";
import { styles } from "./Spells.styles";

export function SpellsComponent(props: SpellsComponentProps): React.JSX.Element {
    const {
        name,
        description
    } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{name}</Text>
            <Text style={styles.subtitleText}>{description}</Text>
        </View>)
}
