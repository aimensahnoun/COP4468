//Dependencies import
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Expo import
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

//Pages import
import UsersPage from "./src/screens/users";
import PostsPage from "./src/screens/posts";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RecoilRoot>
          <MyApp />
        </RecoilRoot>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const Tab = createBottomTabNavigator();

function MyApp() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Users" component={UsersPage} />
        <Tab.Screen name="Posts" component={PostsPage} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
