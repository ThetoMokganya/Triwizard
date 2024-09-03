import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigation } from ".";
import { HouseDetails } from "../pages/House";

const Stack = createNativeStackNavigator<MainStackParams>();
export type MainStackParams = {
    HouseDetails: {
        houseName: string;
    },
    BottomTabNavigation: {}
}

export function NavigationStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="BottomTabNavigation"
            component={BottomTabNavigation}
            options={{headerShown: false}}/>
            <Stack.Screen name="HouseDetails" component={HouseDetails}/>
        </Stack.Navigator>
    )
}

/**
 * Can be used to type a screen component that provides the prop structure for screens
 */
export type ScreenProps<
  RouteName extends keyof MainStackParams,
  NavigatorID extends string | undefined = undefined,
> = NativeStackScreenProps<MainStackParams, RouteName, NavigatorID>;
