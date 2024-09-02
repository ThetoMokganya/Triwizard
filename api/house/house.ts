import { House } from ".";
import { api } from "../../utilities/axios";

export async function allHouses(){
    const response = await api.get<House>('api/houses');

    return response.data?.details;
}
