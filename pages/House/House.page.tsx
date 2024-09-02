import { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { HouseComponent } from ".";
import { allHouses } from "../../api/house";

export function HousePage(): React.JSX.Element {
    const [house, setHouses] = useState<string[]>();

    useEffect(() => {
        allHouses().then((response) => {
            setHouses(response)
        })
    }, [])

    const onHousePress = useCallback(() => {
    }, [])
    return (
        <View>
            <FlatList
                data={house}
                renderItem={({ item, index }) =>
                    <HouseComponent key={index} houseName={item} onPress={onHousePress}/>}>
            </FlatList>
        </View>
    )
}
