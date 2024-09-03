import { SpellResponse } from ".";
import { api } from "../../utilities/axios";

export async function allSpells(){
    const response = await api.get<SpellResponse[]>('api/spells');
    return response.data;
}
