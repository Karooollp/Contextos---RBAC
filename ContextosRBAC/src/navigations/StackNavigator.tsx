import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "../screens/LoginScreen";
import TabsNavigator from "./TabsNavigator";
//1. definir un stack y declarar tipado


export type RootStackParamList = {
  Login: undefined,
  Tabs: undefined;
}
//Crear el stack navigator el cual va a manejar la navegación
const Stack = createNativeStackNavigator<RootStackParamList>();
//Utilizar el stack
export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Tabs" component={TabsNavigator}/>
    </Stack.Navigator>
  );
}