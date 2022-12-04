import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { Start } from "../screens/Start";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const [showHome, setShowHome] = useState(true);
  return (
    <NavigationContainer>
      {showHome ? <AppRoutes /> : <Start />}
    </NavigationContainer>
  )
}