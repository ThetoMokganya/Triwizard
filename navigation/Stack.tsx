import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigation, MainStackParams } from ".";
import { HouseDetails } from "../pages/House";
import { StudentDetails } from "../pages/Students";

const Stack = createNativeStackNavigator<MainStackParams>();

export function NavigationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BottomTabNavigation"
                component={BottomTabNavigation}
                options={{ headerShown: false }} />
            <Stack.Screen name="HouseDetails" component={HouseDetails} />
            <Stack.Screen name="StudentDetails" component={StudentDetails} />
        </Stack.Navigator>
    )
}
