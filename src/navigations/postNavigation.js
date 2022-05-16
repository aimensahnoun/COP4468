import { createStackNavigator } from "@react-navigation/stack";
import PostDetails from "../screens/postDetails";
import PostsPage from "../screens/posts";


const Stack = createStackNavigator();

const PostStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="PostsPage" component={PostsPage} />
      <Stack.Screen name="PostDetails" component={PostDetails} />
    </Stack.Navigator>
  );
};

export default PostStackNavigation;
