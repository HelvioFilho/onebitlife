import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppExplanation } from "../screens/AppExplanation";
import { Home } from "../screens/Home";
import { Start } from "../screens/Start";


export function AppRoutes(){
  const { Navigator, Screen } = createNativeStackNavigator();

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
        name="explanation"
        component={AppExplanation}
      />
      <Screen 
        name="home"
        component={Home}
      />
    </Navigator>
  )
}