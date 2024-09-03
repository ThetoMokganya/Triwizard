import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { HouseComponent } from ".";
import { allHouses } from "../../api/house";

export function HousePage(): React.JSX.Element {
    const navigation = useNavigation();
    const [house, setHouses] = useState<string[]>();

    useEffect(() => {
        allHouses().then((response) => {
            setHouses(response)
        })
    }, [])

    const onHousePress = useCallback((houseName: string) => {
        navigation.navigate("HouseDetails", {houseName})
    }, [house])
    return (
        <View>
            <FlatList
                data={house}
                renderItem={({ item, index }) =>
                    <HouseComponent key={index} houseName={item} onPress={() => {onHousePress(item)}}/>}>
            </FlatList>
        </View>
    )
}
