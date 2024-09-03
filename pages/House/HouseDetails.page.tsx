import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { HouseDetailResponse, getHouse } from "../../api/house";
import { StudentCard } from "../../components/StudentCard";
import { ScreenProps } from "../../navigation";

export const HouseDetails: React.FC<ScreenProps<'HouseDetails'>> = ({
    navigation,
    route,
}) => {
    const [houseDetails, setHouseDetails] = useState<HouseDetailResponse[]>();

    useEffect(() => {
        getHouse(route.params.houseName!!).then((response) => setHouseDetails(response))
    }, [])

    return (<View>
        <FlatList
            data={houseDetails}
            renderItem={({ item, index }) =>
                <StudentCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    gender={item.gender}
                    viewMore={false}
                />}>
        </FlatList>
    </View>)
}
