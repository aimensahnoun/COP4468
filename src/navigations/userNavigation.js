import { createStackNavigator } from "@react-navigation/stack";
import PhotosPage from "../screens/photos";
import UserDetails from "../screens/userDetails";
import UsersPage from "../screens/users";

const Stack = createStackNavigator();

const UserStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="UsersPage" component={UsersPage} />
      <Stack.Screen name="UsersDetails" component={UserDetails} />
      <Stack.Screen name="PhotosPage" component={PhotosPage} />
    </Stack.Navigator>
  );
};

export default UserStackNavigation;
