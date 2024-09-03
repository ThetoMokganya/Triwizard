import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Character } from "../../api/character.types";
import { allStudents } from "../../api/student";
import { StudentCard } from "../../components/StudentCard";

export function StudentPage(): React.JSX.Element {
    const navigation = useNavigation();
    const [students, setStudents] = useState<Character[]>();

    useEffect(() => {
        allStudents().then((response) => {
            setStudents(response)
        })
    }, [])

    const onStudentPress = useCallback((studentName: string) => {
        navigation.navigate('StudentDetails', { studentName })
    }, [])

    return (<View>
        <FlatList
            data={students}
            renderItem={({ item, index }) =>
                <StudentCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    gender={item.gender}
                    viewMore={true}
                    onPress={() => onStudentPress(item?.name!!)} />}>
        </FlatList>
    </View>)
}
