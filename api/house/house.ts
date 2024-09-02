import { api } from "../../utilities/axios";

export async function allHouses(){
    const response = await api.get<string[]>('api/houses');
    return response.data;
}
