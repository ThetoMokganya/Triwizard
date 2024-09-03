import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { SpellsComponent } from ".";
import { SpellResponse, allSpells } from "../../api/spell";

export function SpellsPage(): React.JSX.Element {
    const [spells, setSpells] = useState<SpellResponse[]>();

    useEffect(() => {
        allSpells().then((response) => setSpells(response))
    }, [])

    return (
        <View>
            <FlatList
                data={spells}
                renderItem={({ item }) =>
                    <SpellsComponent key={item.id} name={item.name} description={item.description} />}>
            </FlatList>
        </View>)
}
