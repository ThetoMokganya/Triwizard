import { Character } from "../../api/character.types";

export interface StudentCardProps extends Character{
    viewMore: boolean;
    onPress?: () => void;
}
