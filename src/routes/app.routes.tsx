import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppExplanation } from "../screens/AppExplanation";
import { HabitPage } from "../screens/HabitPage";
import { Home } from "../screens/Home";
import { Start } from "../screens/Start";

const { Navigator, Screen } = createNativeStackNavigator();

export function StartRoute() {

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="start"
        component={Start}
      />
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

export function AppRoutes() {

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