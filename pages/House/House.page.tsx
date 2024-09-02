import { useMemo, useState } from "react";
import { FlatList } from "react-native";
import { HouseComponent } from ".";
import { allHouses } from "../../api/house";

export function HousePage(){

    const [house, setHouses] = useState<string[]>();
    useMemo(()=>{
        allHouses().then((response) => setHouses(response?.house))
    },[])

    return (
    <FlatList
    data={house}
    renderItem={({item}) => <HouseComponent houseName={item}/>}>
    </FlatList>)
}
