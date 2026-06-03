import {View, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Card from "../components/Card";
import {useAuth} from "../contexts/AuthContext";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({navigation}: any) {
  const {logout} = useAuth();
  
  const handleLogout = () => {
    logout();
    navigation.replace("Login");
  };
  
  return (
    <Card>
      <View style={{alignItems: "center", marginBottom: 10}}>
        <Ionicons name="home-outline" size={60} color="#2E7D32"/>
        <Text style={{fontSize: 26, fontWeight: "bold", marginTop: 10}}>
          Home
        </Text>
      </View>
      <Text style={{textAlign: "center"}}>
        Bienvenido al sistema
      </Text>
      <View style={{marginTop: 20}}>
        <CustomButton
          title="Cerrar sesión"
          onPress={handleLogout}
        />
      </View>
    </Card>
  );
}