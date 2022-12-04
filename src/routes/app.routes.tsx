import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppExplanation } from "../screens/AppExplanation";
import { HabitPage } from "../screens/HabitPage";
import { Home } from "../screens/Home";
import { Start } from "../screens/Start";


export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="explanation"
        component={AppExplanation}
      />
      <Screen
        name="habitPage"
        component={HabitPage}
      />
    </Navigator>
  )
}