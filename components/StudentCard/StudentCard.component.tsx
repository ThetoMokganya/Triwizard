import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./StudentCard.styles";
import { StudentCardProps } from "./StudentCard.types";

export function StudentCard(props: StudentCardProps): React.JSX.Element {
    const {
        name,
        house,
        image,
        gender,
        viewMore,
        onPress
    } = props;
    return (
        <View style={styles.container}>
            <View style={styles.detailsSection}>
            <Image style={styles.image} src={image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.gender}>{gender}</Text>
            </View>
            </View>
            {viewMore ?
                <TouchableOpacity onPress={onPress} style={styles.viewMoreContainer}>
                    <Text style={styles.viewMoreText}>View details</Text>
                </TouchableOpacity> : undefined}
        </View>
    )
}
