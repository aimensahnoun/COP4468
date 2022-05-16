//React Native import
import { View, Text, StyleSheet } from "react-native";

//Custom Components import
import User from "../components/User";

const UsersPage = () => {
  return (
    <View style={styles.container}>
      <User />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default UsersPage;
