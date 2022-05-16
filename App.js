//React Native import
import { View, Text } from "react-native";

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

//Assets import
import Users from "./src/assets/icons/users-alt.svg";
import Posts from "./src/assets/icons/postcard.svg";

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
          tabBarShowLabel: false,

          tabBarStyle: [
            {
              position: "absolute",
              left: 60,
              right: 60,
              bottom: 20,
              borderRadius: 15,
              height: 70,
            },
            null,
          ],
        }}
      >
        <Tab.Screen
          name="Users"
          component={UsersPage}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Users
                  width={25}
                  height={25}
                  fill={focused ? "#FFF" : "#A0A0A0"}
                />
                <Text style={{ color: "#000" }}>Users</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Posts"
          component={PostsPage}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Posts
                  width={25}
                  height={25}
                  fill={focused ? "#FFF" : "#A0A0A0"}
                />
                <Text style={{ color: "#000" }}>Posts</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
