import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/AuthContext";

import {navigationRef} from "./src/navigations/NavigationServices";
import StackNavigator from "./src/navigations/StackNavigator";


export default function App() {
  return (
  
        <AuthProvider>
            <NavigationContainer ref={navigationRef}>
              <StackNavigator />
            </NavigationContainer>
        </AuthProvider>
  );
}
