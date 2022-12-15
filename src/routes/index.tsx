import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { Start } from "../screens/Start";
import { AppRoutes, StartRoute } from "./app.routes";

export function Routes() {
  const [showHome, setShowHome] = useState(false);
  return (
    <NavigationContainer>
      {showHome ? <AppRoutes /> : <StartRoute />}
    </NavigationContainer>
  )
}