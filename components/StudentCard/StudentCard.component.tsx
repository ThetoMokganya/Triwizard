import { Image, Text, View } from "react-native";
import { styles } from "./StudentCard.styles";
import { StudentCardProps } from "./StudentCard.types";

export function StudentCard(props: StudentCardProps): React.JSX.Element {
    const {
        name,
        house,
        image,
        gender
    } = props;
    return (
        <View style={styles.container}>
            <Image style={styles.image} src={image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.gender}>{gender}</Text>
            </View>
        </View>
    )
}
