import { CharacterResponse } from ".";
import { api } from "../../utilities/axios";
import { Character } from "../character.types";

export async function allStudents() {
    const response = await api.get<CharacterResponse[]>('api/characters');
    return response.data;
}

export async function getStudent(studentName: string) {
    const response = await api.get<Character>(`api/characters/${studentName}`);
    return response.data;
}
