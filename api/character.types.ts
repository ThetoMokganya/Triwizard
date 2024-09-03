export interface Character{
    id?: string;
    name?: string;
    alernative_names?: string[];
    species?: string;
    gender?: string;
    house?: string;
    dateOfBirth?: string;
    yearOfBirth?: number;
    wizard?: boolean;
    ancestry?: string;
    eyeColour?: string;
    hairColour?: string;
    wand?: WandType;
    patronus?: string;
    hogwartsStudent?: boolean;
    hogwartsStaff?: boolean;
    actor?: string;
    alternate_actors?: string[];
    alive?: boolean;
    image?: string;
}

export interface WandType{
    wood?: string;
    core?: string;
    length?: number;
}
