import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from ".";
import { Character } from "../../api/character.types";
import { getStudent } from "../../api/student";
import { ScreenProps } from "../../navigation";


export const StudentDetails: React.FC<ScreenProps<'StudentDetails'>> = ({ route, navigation }) => {
    const [character, setCharacter] = useState<Character>();
    useEffect(() => {
        getStudent(route.params.studentName).then((response) => setCharacter(response))
    }, [])
    return (
    <View style={styles.container}>
        <View style={styles.primarySection}>
            <Image src={character?.image} style={styles.image}/>
            <View style={styles.personalDetailsContainer}>
                <Text style={styles.nameText}>{character?.name}</Text>
                <Text style={styles.houseText}>{character?.house} House</Text>
                <Text style={styles.genderText}>{character?.gender}</Text>
                <Text style={styles.dobText}>{character?.dateOfBirth}</Text>
            </View>
        </View>
    </View>)
}
