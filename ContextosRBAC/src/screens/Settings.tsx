import {View, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Card from "../components/Card";
import {useAuth} from "../contexts/AuthContext";

export default function SettingsScreen() {
  const {user} = useAuth();
  
  return (
    <Card>
      <View style={{alignItems: "center", marginBottom: 10}}>
        <Ionicons name="settings-outline" size={60} color="#0D47A1"/>
        <Text style={{fontSize: 26, fontWeight: "bold", marginTop: 10}}>
          Settings
        </Text>
      </View>
      <Text style={{textAlign: "center"}}>Panel de configuración</Text>
      <Text style={{textAlign: "center"}}> ESTAS EN SETTINGS</Text>
      <Text style={{marginTop: 10, textAlign: "center"}}>
        Rol: {user?.role}
      </Text>
    </Card>
  );
}