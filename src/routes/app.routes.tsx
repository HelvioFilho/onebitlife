import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
    </Navigator>
  )
}