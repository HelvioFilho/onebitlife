import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import ChangeNavigation from "../services/ChangeNavigation";
import { AppRoutes, StartRoute } from "./app.routes";

export function Routes() {
  const [isShowHome, setIsShowHome] = useState(false);
  const { checkShowHome } = ChangeNavigation;
  checkShowHome(1)
  .then((data) => {
    setIsShowHome(!!data.showHome)
  })
  return (
    <NavigationContainer>
      {isShowHome ? <AppRoutes /> : <StartRoute />}
    </NavigationContainer>
  )
}