import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/Settings";

import { useAuth } from "../contexts/AuthContext";

type TabsParamList = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabNavigator() {
  const { user } = useAuth();
  
  return (
    <Tab.Navigator
      
      initialRouteName={user?.role === "admin" ? "Settings" : "Home"}
      screenOptions={{
        tabBarActiveTintColor: "#5f0650",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#ddd",
        },
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#000",
      }}
    >
      {/* HOME (SIEMPRE VISIBLE) */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      
      {/* SETTINGS SOLO ADMIN */}
      {user?.role === "admin" && (
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            title: "Configuración",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}