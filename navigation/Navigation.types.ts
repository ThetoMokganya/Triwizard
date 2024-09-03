import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type MainStackParams = {
    HouseDetails: {
        houseName: string;
    },
    StudentDetails: {
        studentName: string;
    }
    BottomTabNavigation: {}
}

/**
 * Can be used to type a screen component that provides the prop structure for screens
 */
export type ScreenProps<
    RouteName extends keyof MainStackParams,
    NavigatorID extends string | undefined = undefined,
> = NativeStackScreenProps<MainStackParams, RouteName, NavigatorID>;
