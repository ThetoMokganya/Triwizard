import { HouseDetailResponse } from ".";
import { api } from "../../utilities/axios";

export async function allHouses() {
    const response = await api.get<string[]>('api/houses');
    return response.data;
}

export async function getHouse(houseName: string) {
    const response = await api.get<HouseDetailResponse[]>(`api/houses/${houseName}`)
    return response.data;
}
