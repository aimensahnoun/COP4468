

//React Native import
import { View, StyleSheet, ScrollView } from "react-native";

//Custom Components import
import User from "../components/User";

const UsersPage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <User />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default UsersPage;
