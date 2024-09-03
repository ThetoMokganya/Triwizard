import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HousePage } from "../pages/House";
import { SpellsPage } from "../pages/Spells/Spells.page";
import { StudentPage } from "../pages/Students/Student.page";

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
    return (

        <Tab.Navigator initialRouteName="Houses">
            <Tab.Screen name="Houses" component={HousePage} />
            <Tab.Screen name="Students" component={StudentPage} />
            <Tab.Screen name="Spells" component={SpellsPage}/>
        </Tab.Navigator>
    )
}
