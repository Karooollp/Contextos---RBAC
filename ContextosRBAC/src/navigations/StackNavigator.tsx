import {createNativeStackNavigator} from "@react-navigation/native-stack";


//1. definir un stack y declarar tipado


export type RootStackParamList={

}
//Crear el stack navigator el cual va a manejar la navegación
const Stack =createNativeStackNavigator <RootStackParamList>();
//Utilizar el stack
export default function StackNavigator (){

}