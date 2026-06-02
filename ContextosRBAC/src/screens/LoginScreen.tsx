import {View, StyleSheet, Text} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import { Alert } from "react-native";
import Card from "../components/Card";
import { useAuth } from "../contexts/AuthContext";
import { Picker } from "@react-native-picker/picker";


export function LoginScreen({navigation}: any) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const [role, setRole] =useState<"admin" | "common">("common");
  
  
  //Se llamo una variable loca proveniente de AuthContextType el cual esta tipado en Auth
  
  const handleLogin = async () => {
    try {
      const allowed = login(email, role);
      
      if (!allowed) {
        Alert.alert("Error", "El correo debe terminar en .edu");
        return;
      }
      navigation.navigate("Tabs");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    
    <Card>
      
      <CustomInput
        placeholder={"Ingresa tu correo"}
        value={email}
        onChange={setEmail}
      />
      
      <CustomInput
        type={"password"}
        placeholder={"Ingresaa tu contraseña"}
        value={password}
        onChange={setPasword}
      />
      
      
      <View style={{ width: "100%", marginTop: 10 }}>
        
        <Text>Selecciona rol:</Text>
        
        <Picker
          selectedValue={role}
          onValueChange={(value) =>
            setRole(value as "admin" | "common")
          }
        >
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="Common" value="common" />
        </Picker>
      </View>
      <View style={{ marginTop: 10, width: '100%', alignItems: 'center' }}>
        <CustomButton title={"INICIAR SESIÓN"} onPress={handleLogin} />
      </View>
    </Card>
  );
  
  
}